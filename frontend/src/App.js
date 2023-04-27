import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Home, Data, CFP, Organizations, PastPrecedings, Resources, CFT, SignInSignUp, SignInSignUp_O, SignInSignUp_T, TrackDetails_Organizer, DisplayTracks, Leaderboard,TrackDetails } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import Submit from './pages/Submit'



const App = () => {
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings, sidebarData } = useStateContext();


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
                                    style={{ background: currentColor, borderRadius: '50%', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}
                                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                                >
                                    <FiSettings />
                                </button>

                            </TooltipComponent>
                        </div>
                        {activeMenu ? (
                            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                                <Sidebar links={sidebarData} />sidebar
                            </div>
                        ) : (
                            <div className="w-0 dark:bg-secondary-dark-bg">
                                <Sidebar links={sidebarData} /> sidebar
                            </div>
                        )}
                        <div className={
                            activeMenu
                                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  ' //md:ml-72
                                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '    //flex-2 
                        }>



                            <div>
                                {themeSettings && (<ThemeSettings />)}
                                <Routes> */
                                    {/* Home Section */}
                                    <Route path="/Leaderboard" element={<Leaderboard />} />
                                    <Route path="/" element={(<Home year="2023" />)} />
                                    <Route path="/home" element={(<Home year="2023" />)} />

                                    {/* Home section Pages  */}
                                    <Route path="/Call_For_Papers" element={<CFP />} />
                                    <Route path="/Call_For_Tracks" element={<CFT />} />
                                    <Route path="/Organizations" element={<Organizations />} />

                                    {/* Archives */}
                                    <Route path="/Data" element={<Data />} />
                                    <Route path="/Resources" element={<Resources />} />
                                    <Route path="/PastPrecedings" element={<PastPrecedings />} />

                                    <Route path="/Submit" element={<Submit />} />


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
                                    <Route path="/SignInSignUp_T" element={<SignInSignUp_T />} />
                                    <Route path="/TrackDetails_Organizer" element={<TrackDetails_Organizer />} />
                                    <Route path="/DisplayTracks" element={<DisplayTracks />} />

                                    <Route path="/TrackDetails" element={<TrackDetails />} />

                                    <Route path="/api/trackedit" element={<TrackDetails_Organizer />} />


                                    <Route path="/api/track" element={<TrackDetails />} />
                                    {/* <Route path="/" element={<App1 />} */}


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


