export default function navbar () {
    return (
        <div className="min-h-screen background-color: #383939; p-8 flex justify-center items-center">
            <div className="w-64 background-color: #7b054a; text-white flex flex-col sticky top-0 h-screen py-8 px-6">
                <div className="flex items-center gap-2 mb-12">
                    <p className="mt-6 mb-6">CodingLab</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="ml-3"></div>
                    <p>Main Menu</p>
                </div>
                <div className="flex-gap-5">
                    <img src="layout-dashboard.svg" alt="dashboard" className="ml-5" />
                    <p>Dashboard</p>
                <div className="flex-gap-5">
                    <img src="menu-3.svg" alt="overview" className="ml-5" />
                    <p>Overview</p>
                </div>
                <div className="flex-gap-5">
                    <img src="chart-line.svg" alt="analytic" className="ml-5" />
                    <p>Analytic</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="ml-3"></div>
                    <p>General</p>
                </div>
                <div className="flex-gap-5">
                    <img src="folder.svg" alt="folder" className="ml-5" />
                    <p>Projects</p>
                </div>
                <div className="flex-gap-5">
                    <img src="stack-back.svg" alt="group" className="ml-5" />
                    <p>Groups</p>
                </div>
                <div className="flex-gap-5">
                    <img src="message-report.svg" alt="report" className="ml-5" />
                    <p>Report</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="ml-3"></div>
                    <p>Account</p>
                </div>
                <div className="flex-gap-5">
                    <img src="user-circle.svg" alt="profile" className="ml-5" />
                    <p>Profile</p>
                </div>
                <div className="flex-gap-5">
                    <img src="settings.svg" alt="setting" className="ml-5" />
                    <p>Settings</p>
                </div>
                </div>
            </div>
        </div>
    )
}