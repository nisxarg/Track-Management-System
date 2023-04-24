import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Home, Data, CFP, Organizations, PastPrecedings, Resources, CFT, SignInSignUp,SignInSignUp_O } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import TrackDetails from './pages/TrackDetails'

const App = () => {
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
    
          
    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
     <div >
           
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">

                            <button
                                type="button"
                                onClick={() => setThemeSettings(true)}
                                style={{ background: currentColor, borderRadius: '50%' }}
                                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                            >
                                <FiSettings />
                            </button>

                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                            <Sidebar />sidebar
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar /> sidebar
                        </div>
                    )}
                    <div className={
                        activeMenu
                            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  ' //md:ml-72
                            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '    //flex-2 
                    }>


                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                            <Navbar />
                        </div>
                        <div>
                            {themeSettings && (<ThemeSettings />)}
                            <Routes> */
                                {/* Home Section */}
                                <Route path="/" element={(<Home year="2023" />)} />
                                <Route path="/home" element={(<Home year="2023"/>)} />

                                {/* Home section Pages  */}
                                <Route path="/CallForPapers" element={<CFP />} />
                                <Route path="/CallForTracks" element={<CFT />} />
                                <Route path="/Organizations" element={<Organizations />} />

                                {/* Archives */}
                                <Route path="/Fire" element={<Data />} />
                                <Route path="/Resources" element={<Resources />} />
                                <Route path="/PastPrecedings" element={<PastPrecedings />} />

                                <Route path="/2022" element={<Home year="2022" />} />
                                <Route path="/2021" element={<Home year="2021" />} />
                                <Route path="/2020" element={<Home year="2020" />} />
                                <Route path="/2019" element={<Home year="2019" />} />
                                <Route path="/2016" element={<Home year="2016" />} />
                                <Route path="/2017" element={<Home year="2017" />} />
                                <Route path="/2015" element={<Home year="2015" />} />
                                <Route path="/2014" element={<Home year="2014" />} />
                                <Route path="/2018" element={<Home year="2018" />} />
                                <Route path="/2013" element={<Home year="2013" />} />
                                <Route path="/2012" element={<Home year="2012" />} />
                                <Route path="/SignInSignUp" element={<SignInSignUp />} />
                                <Route path="/SignInSignUp_O" element={<SignInSignUp_O />} />


                                <Route path="/track-details/:trackName"element={<TrackDetails  />} />



                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
            </div>
        </div>
    )
}

export default App


