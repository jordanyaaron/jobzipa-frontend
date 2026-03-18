import { 
  BriefcaseIcon,
  MoonIcon ,
  ExclamationTriangleIcon,
  SparklesIcon, 
  ClockIcon, 
  CheckCircleIcon,
  BanknotesIcon,
  XCircleIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  StarIcon,
  UserIcon,
  HomeModernIcon,
  EyeIcon, CurrencyDollarIcon,
  UserGroupIcon, ArrowTrendingUpIcon,
  UsersIcon
  
} from "@heroicons/react/24/outline";
import { PieChart, Pie } from "recharts";
import ApprovedJobChart from '../../../components/charts/ApprovedJobs'
import FinanceChart from '../../../components/charts/FinanceChart'
import PayoutDonutChart from '../../../components/charts/PayoutChart'
import DeviceSize from '../../../components/DeviceSize'



export default function OverviewsSuper(){
  const data = [
    { name: "active", value: 20, fill: "#facc15" },
    { name: "expired", value: 50, fill: "#22c55e" },
    { name: "Unspecified", value: 15, fill: "#ef4444" },
  ];
  const financeData = [
    { name: "Jan", revenue: 4000, staff: 2400, profit: 1600 },
    { name: "Feb", revenue: 3000, staff: 1398, profit: 1602 },
    { name: "Mar", revenue: 5000, staff: 2000, profit: 3000 },
    { name: "Apr", revenue: 4780, staff: 1890, profit: 2890 },
  ];

  const payoutData = [
    { name: "Pending", value: 2000, fill: "#f59e0b" },   // 🟡 yellow
    { name: "Approved", value: 3000, fill: "#3b82f6" }, // 🔵 blue
    { name: "Paid", value: 8000, fill: "#22c55e" },     // 🟢 green
    { name: "Rejected", value: 1000, fill: "#ef4444" }, // 🔴 red
  ];
  
  const total = payoutData.reduce((sum, item) => sum + item.value, 0);
  return(
    <>
      <DeviceSize />
      <div
        className="
          h-auto
          w-full  max-w-[1144px]
          block  
          bg-(--main-bg)
          mx-auto  p-3 md:p-6 pt-3
        "
      >
        
        <div 
            className="
              block  w-full 
              mb-20px
              pb-[20px]
              overflow-y-auto
            "
          >
            <h1
              className="
                text-lg md:text-xl lg:text-2xl font-bold
                mb-[20px]
              "
            >Jobs</h1>
            <div
              className="
                w-full
                grid grid-cols-2 md:grid-cols-3
                gap-2
              "
            >
              <div
                className="
                  grid grid-cols-2 md:grid-cols-4 
                  gap-2
                  col-span-2
                  min-h-[260px]
                  rounded-lg
                "
              >
                <div 
                  className="
                    p-4 border rounded-lg 
                    border-[var(--border)]
                    col-span-1
                    md:col-span-2
                    flex items-center justify-between
                  "
                >
                  <div>
                    <p className="text-sm opacity-70 mb-[20px]" >Recent Jobs</p>
                    <h2 className="text-2xl font-bold">0</h2>
                  </div>

                  <SparklesIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
                </div>
                <div 
                  className="
                    p-4 border rounded-lg 
                    border-[var(--border)]
                    col-span-1
                    md:col-span-2
                    flex items-center justify-between
                  "
                >
                  <div>
                    <p className="text-sm opacity-70 mb-[20px]">Approved Jobs</p>
                    <h2 className="text-2xl font-bold">120</h2>
                  </div>

                  <ClockIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
                </div>
                <div 
                  className="
                    p-4 border rounded-lg 
                    border-[var(--border)]
                    col-span-1
                    md:col-span-2
                    flex items-center justify-between
                  "
                >
                  <div>
                    <p className="text-sm opacity-70 mb-[20px]">Pending Jobs</p>
                    <h2 className="text-2xl font-bold">120</h2>
                  </div>

                  <ClockIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
                </div>
                <div 
                  className="
                    p-4 border rounded-lg 
                    border-[var(--border)]
                    col-span-1
                    md:col-span-2
                    flex items-center justify-between
                  "
                >
                  <div>
                    <p className="text-sm opacity-70 mb-[20px]">Reported Jobs</p>
                    <h2 className="text-2xl font-bold">120</h2>
                  </div>

                  <ExclamationTriangleIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
                </div>
              </div>

              <div
                className="
                  col-span-2
                  md:col-span-1
                  h-auto md:min-h-[280px]
                  border border-[var(--border)]
                  rounded-lg
                  p-4
                  flex flex-row md:flex-col
                  justify-start md:justify-between
                  items-center
                  gap-4
                "
              >
                
                {/* Chart */}
                <div className="w-1/2 md:w-full flex flex-col justify-center">
                  <p className="text-sm opacity-70 block md:hidden">Approved</p>
                  <ApprovedJobChart data={data} />
                </div>

                {/* Legend */}
                <div className="flex flex-col flex-wrap gap-2 justify-start w-1/2  md:w-full">
                  {data.map((entry) => (
                    <div key={entry.name} className="flex items-center gap-2">
                      {/* Color box */}
                      <div
                        className="w-4 h-4 rounded-sm"
                        style={{ backgroundColor: entry.fill }}
                      />
                      {/* Label */}
                      <span className="text-sm text-[var(--text)]">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>

        <div 
            className="
              block  w-full 
              mb-20px
              pb-[20px]
              overflow-y-auto
            "
          >
            <h1
              className="
                text-lg md:text-xl lg:text-2xl font-bold
                mb-[20px]
              "
            >Staffs</h1>
            <div
              className="
                w-full
                grid grid-cols-4
                gap-2
              "
            >
              <div 
                className="
                  p-4 border rounded-lg 
                  border-[var(--border)]
                  col-span-2
                  flex items-center justify-between
                "
              >
                <div>
                  <h2 className="text-2xl font-bold">1</h2>
                  <p className="text-sm opacity-70 mt-[20px]" >Super User</p>
                </div>

                <StarIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
              </div>
              <div 
                className="
                  p-4 border rounded-lg 
                  border-[var(--border)]
                  col-span-2
                  flex items-center justify-between
                "
              >
                <div>
                  <h2 className="text-2xl font-bold">2</h2>
                  <p className="text-sm opacity-70 mt-[20px]">Admins</p>
                </div>

                <ShieldCheckIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
              </div>
              <div 
                className="
                  p-4 border rounded-lg 
                  border-[var(--border)]
                  col-span-2
                  flex items-center justify-between
                "
              >
                <div>
                  <h2 className="text-2xl font-bold">4</h2>
                  <p className="text-sm opacity-70 mt-[20px]">Moderators</p>
                </div>

                <UserIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
              </div>
              <div 
                className="
                  p-4 border rounded-lg 
                  border-[var(--border)]
                  col-span-2
                  flex items-center justify-between
                "
              >
                <div>

                  <h2 className="text-2xl font-bold">10</h2>
                  <p className="text-sm opacity-70 mt-[20px]">Unapproved Staffs</p>
                </div>

                <ExclamationTriangleIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
              </div>
              
            </div>
        </div>

        <div 
          className="
            block  w-full 
            mb-20px
            overflow-y-auto
          "
        >
          <h1
            className="
                text-lg md:text-xl lg:text-2xl font-bold
                mb-[20px]
            "
          >Finances</h1>
          <div
            className="
              w-full
              grid grid-cols-1 
              gap-2
            "
          >
            <div
              className="
                col-span-1
                min-h-[140px]
                grid grid-cols-6 
                gap-2
                rounded-lg
              "
            > 
              <div 
                className="
                  p-4 border rounded-lg 
                  border-[var(--border)]
                  col-span-6 lg:col-span-2
                  flex items-center justify-between
                "
              >
                <div>
                  <h2 className="text-2xl font-bold">$20,001</h2>
                  <p className="text-sm opacity-70 mt-[20px]" >Total Eanings</p>
                </div>

                <CurrencyDollarIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
              </div>
              <div 
                className="
                  p-4 border rounded-lg 
                  border-[var(--border)]
                  col-span-3 lg:col-span-2
                  flex items-center justify-between
                "
              >
                <div>
                  <h2 className="text-2xl font-bold">$4,001</h2>
                  <p className="text-sm opacity-70 mt-[20px]" >Staffs Earning</p>
                </div>

                <UserGroupIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
              </div>
              <div 
                className="
                  p-4 border rounded-lg 
                  border-[var(--border)]
                  col-span-3 lg:col-span-2
                  flex items-center justify-between
                "
              >
                <div>
                  <h2 className="text-2xl font-bold">$16,001</h2>
                  <p className="text-sm opacity-70 mt-[20px]" >Net Profit</p>
                </div>

                <ArrowTrendingUpIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
              </div>
            </div>
            <div
              className="
                col-span-1
                min-h-[140px]
                grid grid-cols-3 gap-2
                rounded-lg
              "
            >
              <div
                className="
                  col-span-3 lg:col-span-1
                  grid grid-cols-2 gap-2
                "
              > 
                <div 
                  className="
                    p-4 border rounded-lg 
                    border-[var(--border)]
                    col-span-1 lg:col-span-2
                    flex items-center justify-between
                  "
                >
                  <div>
                    <h2 className="text-2xl font-bold">100764</h2>
                    <p className="text-sm opacity-70 mt-[20px]" >Homepage Views</p>
                  </div>

                  <HomeModernIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
                </div>
                <div 
                  className="
                    p-4 border rounded-lg 
                    border-[var(--border)]
                    col-span-1 lg:col-span-2
                    flex items-center justify-between
                  "
                >
                  <div>
                    <h2 className="text-2xl font-bold">60764</h2>
                    <p className="text-sm opacity-70 mt-[20px]" >Job Views</p>
                  </div>

                  <EyeIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
                </div>
              </div>
              <div
                className="
                  p-4 border rounded-lg 
                  border-[var(--border)]
                  col-span-3 lg:col-span-2
                  grid grid-cols-1
                "
              >
                <FinanceChart data={financeData} />
              </div>
            </div>
          </div>
        </div>

        <div 
          className="
            block  w-full 
            mb-20px
            overflow-y-auto
          "
        >
          <h1
            className="
                text-lg md:text-xl lg:text-2xl font-bold
                mb-[20px]
            "
          >Payouts</h1>
          <div
            className="
              w-full
              grid grid-cols-1 
              gap-2
            "
          >
            <div
              className="
                col-span-1
                min-h-[140px]
                grid grid-cols-6 
                gap-2
                rounded-lg
              "
            > 
              <div 
                className="
                  p-4 border rounded-lg 
                  border-[var(--border)]
                  col-span-6 lg:col-span-2
                  flex items-center justify-between
                "
              >
                <div>
                  <h2 className="text-2xl font-bold">100</h2>
                  <p className="text-sm opacity-70 mt-[20px]" >Tota Requests</p>
                </div>

                <BanknotesIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
              </div>
              <div 
                className="
                  p-4 border rounded-lg 
                  border-[var(--border)]
                  col-span-3 lg:col-span-2
                  flex items-center justify-between
                "
              >
                <div>
                  <h2 className="text-2xl font-bold">29</h2>
                  <p className="text-sm opacity-70 mt-[20px]" >Paid</p>
                </div>

                <CheckCircleIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
              </div>
              <div 
                className="
                  p-4 border rounded-lg 
                  border-[var(--border)]
                  col-span-3 lg:col-span-2
                  flex items-center justify-between
                "
              >
                <div>
                  <h2 className="text-2xl font-bold">30</h2>
                  <p className="text-sm opacity-70 mt-[20px]" >Approved</p>
                </div>

                <CheckBadgeIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
              </div>
            </div>
            <div
              className="
                col-span-1
                min-h-[140px]
                grid grid-cols-3 gap-2
                rounded-lg
              "
            >
              <div
                className="
                  col-span-3 lg:col-span-1
                  grid grid-cols-2 gap-2
                "
              > 
                <div 
                  className="
                    p-4 border rounded-lg 
                    border-[var(--border)]
                    col-span-1 lg:col-span-2
                    flex items-center justify-between
                  "
                >
                  <div>
                    <h2 className="text-2xl font-bold">20</h2>
                    <p className="text-sm opacity-70 mt-[20px]" >Pending</p>
                  </div>

                  <ClockIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
                </div>
                <div 
                  className="
                    p-4 border rounded-lg 
                    border-[var(--border)]
                    col-span-1 lg:col-span-2
                    flex items-center justify-between
                  "
                >
                  <div>
                    <h2 className="text-2xl font-bold">0</h2>
                    <p className="text-sm opacity-70 mt-[20px]" >Rejected</p>
                  </div>

                  <XCircleIcon className="h-8 w-8 opacity-70 text-[var(--text)]" />
                </div>
              </div>
              <div
                className="
                  p-4 border rounded-lg 
                  border-[var(--border)]
                  col-span-3 lg:col-span-2
                  grid grid-cols-2
                   flex flex-col items-center justify-between
                "
              >
                <div
                  className="
                      col-span-1
                  "
                >
                  <PayoutDonutChart data={payoutData} />
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  {payoutData.map((item) => {
                    const percent = ((item.value / total) * 100).toFixed(1);

                    return (
                      <div
                        key={item.name}
                        className="flex items-center justify-between w-full"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-sm"
                            style={{ backgroundColor: item.fill }}
                          />
                          <span className="text-sm">{item.name}</span>
                        </div>

                        <span className="text-xs opacity-70">
                          {percent}%
                        </span>
                      </div>
                    );
                  })}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





