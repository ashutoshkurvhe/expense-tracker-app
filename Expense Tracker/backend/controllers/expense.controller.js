const Expense = require('../models/Expense');
const xlsx = require('xlsx');

//Add Expense source
exports.addExpense = async (req, res) => { 
    const userId = req.user.id;

    try {
        const { icon, category, amount, date } = req.body;

        // Validate required fields
        if (!category || !amount || !date) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create new income entry
        const newExpense = new Expense({
            userId,
            icon,
            category,
            amount,
            date: new Date(date),
        });

        await newExpense.save();
        res.status(200).json(newExpense);
    }catch (error) {
        console.status(500).json({ message: 'Server Error' });
    }
}

// Get all Expense sources
exports.getAllExpense = async (req, res) => {
    const userId = req.user.id;

    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete Expense source
exports.deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.json({ message: "Expense deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Download Expense data as Excel file
exports.downloadExpenseExcel = async (req, res) => {
    const userId = req.user.id;
    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });


        //Prepare Expense data for Excel
        const data = expense.map((item) => ({
            Source: item.source,
            Amount: item.amount,
            Date: item.date,
        }));

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, 'Expense');
        xlsx.writeFile(wb, 'expense_details.xlsx');
        res.download('expense_details.xlsx');
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};