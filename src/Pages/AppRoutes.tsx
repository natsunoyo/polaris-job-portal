import { Divider } from "@mantine/core"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import ApplyPage from "./ApplyPage"
import CompanyProfilePage from "./CompanyProfilePage"
import FindJobPage from "./FindJobPage"
import FindTalentsPage from "./FindTalentsPage"
import HomePage from "./HomePage"
import JobDescPage from "./JobDescPage"
import JobHistoryPage from "./JobHistoryPage"
import PostedJobsPage from "./PostedJobsPage"
import PostJobPage from "./PostJobPage"
import SignUpPage from "./SignUpPage"
import TalentProfilePage from "./TalentProfilePage"
import UserProfilePage from "./UserProfilePage"
import { useSelector } from "react-redux"
import Authorship from "../Components/Footer/Authorship"

const AppRoutes = () => {
    const user = useSelector((state: any) => state.user)
    return <BrowserRouter>
        <Header />
        <Divider size="xs" mx="md" />
        <Routes>
            <Route path='/talents' element={<FindTalentsPage />} />
            <Route path='/talent-profile/:id' element={<TalentProfilePage />} />
            <Route path='/job-description/:id' element={<JobDescPage />} />
            <Route path="/company-profile/:name" element={<CompanyProfilePage />} />
            <Route path='/post-job' element={<PostJobPage />} />
            <Route path="/posted-jobs/:id" element={<PostedJobsPage />} />
            <Route path="/job-history" element={<JobHistoryPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUpPage />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <SignUpPage />} />
            <Route path="/apply/:id" element={<ApplyPage />} />
            <Route path="/jobs" element={<FindJobPage />} />
            <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
        <Divider size="xs" mx="md" />
        <Authorship />
    </BrowserRouter>
}

export default AppRoutes