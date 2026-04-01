import React from 'react';
import { Routes , Route } from 'react-router-dom';

// route

import ProtectedRoute from "./ProtectedRoute";

// layouts
import StaffDashboardLayout from '../layouts/StaffDashboardLayout';
import HomeLayout from '../layouts/HomeLayout';
import PostLayout from '../layouts/PostLayout';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';

// elements
import Home from '../pages/Home';
import GenaralBookmark from '../pages/Bookmacked';
import GenealNotifications from '../pages/Notifacations';
import GenaralSettings from '../pages/GeneralSettings';
import FaQ from '../pages/Faq';
import NotFound from '../pages/NotFound';

import PostAJob from '../pages/posting/PostAJob';
import PostOnDashboard from '../pages/dashboard/PostOnDashboard';

import Login from '../pages/auth/Login';
import ForgotPassword from '../pages/auth/ForgotPassword';
import StaffCompleteRegistration from '../pages/auth/StaffCompleteRegistration';
import ResetPassword from '../pages/auth/ResetPassword';
import ResetPasswordEmailSent from '../pages/auth/ResetPasswordEmailSent';
import InviteStaff from '../pages/auth/InviteStaff';
import StaffDashboard from '../pages/dashboard/StaffDashboard';


// dashboards
// 1. super 
import OverviewsSuper from '../pages/dashboard/super/Overviews'
import AnalyticsSuper from '../pages/dashboard/super/Analytics'
import JobsSuper from '../pages/dashboard/super/Jobs'
import NotificationSuper from '../pages/dashboard/super/Notifications'
import ReportSuper from '../pages/dashboard/super/Reports'
import ReportDetail from '@/pages/dashboard/ReportDetail';
import RevenueAndFinace from '../pages/dashboard/super/RevenueAndFinace'
import WinningTeam from '../pages/dashboard/super/WinningTeam'
import SettingsSuper from '../pages/dashboard/super/Settings'
import SuperPayouts from '../pages/dashboard/super/Payouts'
import InviteMember from '../pages/dashboard/InviteStaff'
import NotificationDetail from '@/pages/dashboard/NotificationDetail';

// 2. staff control 
import Overviews from '../pages/dashboard/Overviews'
import Reports from '../pages/dashboard/Reports'
import JobsInStaff from '../pages/dashboard/Jobs'
import Monitizations from '../pages/dashboard/Monitization'
import Settings from '../pages/dashboard/Settings'
import Notifications from '../pages/dashboard/Notifications'
import Analytics from '../pages/dashboard/Analytics'

// 2. admin page 
import PayoutsAdmin from '../pages/dashboard/admin/Payouts'
import StaffsAdmin from '../pages/dashboard/admin/Staffs'


const AppRoutes = ({ darkMode, setDarkMode }) => {
    return (
      <Routes>
        <Route  element={<HomeLayout darkMode={darkMode} setDarkMode={setDarkMode} />}>
            <Route path="/" element={<Home />} />
            <Route path="/bookmarked" element={<GenaralBookmark />} />
            <Route path="/faq" element={<FaQ />} />
            <Route path="/notifications" element={<GenealNotifications />} />
            <Route path="/settings" element={<GenaralSettings />} />
            {/* <Route path="/invite-staff" element={<InviteStaff />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FaQ/>} /> */}
        </Route>

        <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/complete-registration" element={<StaffCompleteRegistration />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/rps-notification" element={<ResetPasswordEmailSent />} />
            <Route path="/invite-staff" element={
                <ProtectedRoute requireSuperuser={true}>
                  <InviteStaff />
                </ProtectedRoute>
              } 
            />
        </Route> 

        <Route element={<DashboardLayout  darkMode={darkMode} setDarkMode={setDarkMode} />}>
            {/* super */}
            <Route path="/super" element={
                <ProtectedRoute requireSuperuser={true}>
                  <OverviewsSuper />
                </ProtectedRoute>
              } 
            />

            <Route path="/super/jobs" element={
                <ProtectedRoute requireSuperuser={true}>
                  <JobsSuper />
                </ProtectedRoute>
              } 
            />

            <Route path="/super/notifications" element={
                <ProtectedRoute requireSuperuser={true}>
                  <NotificationSuper />
                </ProtectedRoute>
              } 
            />

            <Route path="/super/notifications/:category/:id" element={
                <ProtectedRoute requireSuperuser={true}>
                  <NotificationDetail />
                </ProtectedRoute>
              } 
            />
            
            <Route path="/super/analytics" element={
                <ProtectedRoute requireSuperuser={true}>
                  <AnalyticsSuper />
                </ProtectedRoute>
              } 
            />
            
            <Route path="/super/revenue" element={
                <ProtectedRoute requireSuperuser={true}>
                  <RevenueAndFinace />
                </ProtectedRoute>
              } 
            />
            
            <Route path="/super/staff" element={
                <ProtectedRoute requireSuperuser={true}>
                  <WinningTeam />
                </ProtectedRoute>
              } 
            />

            <Route path="/super/report" element={
                <ProtectedRoute requireSuperuser={true}>
                  <ReportSuper />
                </ProtectedRoute>
              } 
            />

            <Route path="/super/report/:id" element={
                <ProtectedRoute requireSuperuser={true}>
                  <ReportDetail />
                </ProtectedRoute>
              } 
            />

            <Route path="/super/settings" element={
                <ProtectedRoute requireSuperuser={true}>
                  <SettingsSuper />
                </ProtectedRoute>
              } 
            />

            <Route path="/super/post" element={
                <ProtectedRoute requireSuperuser={true}>
                  <PostOnDashboard />
                </ProtectedRoute>
              } 
            />

            <Route path="/super/payouts" element={
                <ProtectedRoute requireSuperuser={true}>
                  <SuperPayouts />
                </ProtectedRoute>
              } 
            />

            <Route path="/super/invite" element={
                <ProtectedRoute requireSuperuser={true}>
                  <InviteMember />
                </ProtectedRoute>
              } 
            />



            

            <Route path="/admin" element={
                <ProtectedRoute requireSuperuser={true}>
                  <OverviewsSuper />
                </ProtectedRoute>
              } 
            />
            <Route path="/dashboard" element={
                <ProtectedRoute requireStaff={true}>
                  <StaffDashboard />
                </ProtectedRoute>
              } 
            />
        </Route> 


        <Route element={<StaffDashboardLayout />}>
            {/* Admin routes */}
          <Route path={"/admin"}>
            <Route index element={
              <ProtectedRoute requireStaffOnly={true}>
                <Overviews />
              </ProtectedRoute>
            } />

            <Route path="jobs" element={
              <ProtectedRoute requireStaffOnly={true}>
                <JobsInStaff />
              </ProtectedRoute>
            } />

            <Route path="staffs" element={
              <ProtectedRoute requireStaffOnly={true}>
                <StaffsAdmin />
              </ProtectedRoute>
            } />

            <Route path="analytics" element={
              <ProtectedRoute requireStaffOnly={true}>
                <Analytics />
              </ProtectedRoute>
            } />

            <Route path="monitization" element={
              <ProtectedRoute requireStaffOnly={true}>
                <Monitizations />
              </ProtectedRoute>
            } />

            <Route path="payouts" element={
              <ProtectedRoute requireStaffOnly={true}>
                <PayoutsAdmin />
              </ProtectedRoute>
            } />


            <Route path="notifications" element={
              <ProtectedRoute requireStaffOnly={true}>
                <Notifications />
              </ProtectedRoute>
            } />
            

            <Route path="reports" element={
              <ProtectedRoute requireStaffOnly={true}>
                <Reports />
              </ProtectedRoute>
            } />


            <Route path="settings" element={
              <ProtectedRoute requireStaffOnly={true}>
                <Reports />
              </ProtectedRoute>
            } />
                      
          </Route>

          {/* Official routes */}
          <Route path="/official">
          <Route index element={
              <ProtectedRoute requireStaffOnly={true}>
                <Overviews />
              </ProtectedRoute>
            } />

            <Route path="jobs" element={
              <ProtectedRoute requireStaffOnly={true}>
                <JobsInStaff />
              </ProtectedRoute>
            } />

            

            <Route path="analytics" element={
              <ProtectedRoute requireStaffOnly={true}>
                <Analytics />
              </ProtectedRoute>
            } />

            <Route path="monitization" element={
              <ProtectedRoute requireStaffOnly={true}>
                <Monitizations />
              </ProtectedRoute>
            } />


            <Route path="notifications" element={
              <ProtectedRoute requireStaffOnly={true}>
                <Notifications />
              </ProtectedRoute>
            } />
            

            <Route path="reports" element={
              <ProtectedRoute requireStaffOnly={true}>
                <Reports />
              </ProtectedRoute>
            } />


            <Route path="settings" element={
              <ProtectedRoute requireStaffOnly={true}>
                <Reports />
              </ProtectedRoute>
            } />
          </Route>

          {/* staff normal routes */}
          <Route path="/staff">
            <Route index element={
              <ProtectedRoute requireStaffOnly={true}>
                <Overviews />
              </ProtectedRoute>
            } />
          </Route>

          
        </Route>

        

        
       

        {/* <Route element={<AuthLayout/>}>
            <Route path="/forgot-password" element={<ResetPassword />} />
            <Route path="/rps-notification" element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } />
        </Route>
        */}
        <Route element={<PostLayout darkMode={darkMode} setDarkMode={setDarkMode} />}>
            <Route path="/post" element={
                <ProtectedRoute requireStuff={true}>
                  <PostAJob />
                </ProtectedRoute>
              } 
            />
        </Route> 
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    );
  };
  
  export default AppRoutes;