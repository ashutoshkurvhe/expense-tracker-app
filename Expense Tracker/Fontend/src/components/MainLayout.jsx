const MainLayout = ({children}) => {
  return (
    <div>
          <Header />
          {children}
          <Footer />
    </div>
  )
}

export default MainLayout
