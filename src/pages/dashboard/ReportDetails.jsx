import React, { useState } from "react";
import { useParams , Link } from "react-router-dom";
import { reports } from "@/data/roports";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { register, format } from "timeago.js";
import { stringify } from "uuid";

register("short", (number, index) => [
  ["just now", "now"],
  ["%s seconds ago", "%s sec "],
  ["1 minute ago", "1min"],
  ["%s minutes ago", "%smin"],
  ["1 hour ago", "1Hr"],
  ["%s hours ago", "%sHrs"],
  ["1 day ago", "d"],
  ["%s days ago", "%sd"],
  ["1 week ago", "week"],
  ["%s weeks ago", "%sw"],
  ["1 month ago", "Mon"],
  ["%s months ago", "%sMon"],
  ["1 year ago", "year"],
  ["%s years ago", "%sYrs"],
][index]);



export default function ReportDetails() {
  const { id } = useParams();

  // local state (temporary)
  const [reportMessageId, setReportMessageId] = useState(null);

  const report = reports.find((r) => r.id === Number(id));
  

 

  // 🔥 change status
 

 

  if (!report) {
    return <div className="p-4 w-full h-full flex justify-center items-center">Report not found</div>;
  }

  return (
    <div className="p-1 mt-[68px] md:mt-0 md:p-6 w-[calc(100vw)] md:w-[calc(100vw-240px)] space-y-4">
        <div className="relative px-2">
            <Link to="">
                <h1
                  className="font-extrabold text-[20px]"
                >{report.jobTitle}</h1>
            </Link>
            <p className="text-[var(--placeholder)]">
                <span className="text-[var(--placeholder)]">@ {report.companyName} </span>
                <span className="text-[var(--placeholder)]">Posted by </span>
                <span  className="hover:decoration-underline text-blue-600 "><Link to={`/${report.poster}`}> {` ${report.poster}`}</Link></span>
            </p>
        </div>
        <div
            className="
                relativ 
            "
        >
            <ul className="mx-0 w-full lg:w-[700px] w-full text-sm" >
            {report.messages.length === 0 ? (
              <li className=" w-full h-full flex justify-center items-center px-2   py-3 md:px-4  text-sm text-gray-500">No Reports</li>
            ) : (
                report.messages.map((message) => (
                <li
                    key={message.id}
                    onClick={()=>{}}
                    className="
                        px-4 py-3 text-sm text-[var(--text)]  
                        border-b border-[var(--border)]
                        hover:bg-[var(--hover)] cursor-pointer
                    "
                > 
                  <div className="flex justify-start items-center gap-3">
                    <div
                      className="flex-1 flex  justify-start items-center gap-2"
                    >
                        <span 
                            className="
                                flex  rounded-full justify-start items-center  p-0 bg-purple-200 text-purple-800
                            "
                        >
                            <img 
                                src={
                                    message.reporter_dp_url ? message.reporter_dp_url 
                                   : "https://jobzipa-profile-images.s3.eu-north-1.amazonaws.com/detault.jpg"
                                } 
                                alt="" srcset="" 
                                className="h-9 w-9 rounded-full" 
                            />
                        </span>
                      <p 
                        className="
                          grid grid-cols-1 flex-1
                        "
                      >
                        <Link to={`/:${message.reporter}`}>
                            <strong className="justify-start col-span-1">{message.reporter}</strong>
                        </Link>
                        <span 
                            className="justify-start cursor-pointer col-span-1"
                            onClick={()=>{
                                    if(!reportMessageId){
                                        setReportMessageId(message.id)
                                    }else{
                                        setReportMessageId(null)
                                    }
                                }
                            }
                        >
                            {   
                                reportMessageId === message.id 
                                ? message.message
                                : message.message.slice(0, 40) + "..."
                            }
                        </span>
                        
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 w-[50px]">{format(message.date, "short")}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

      {/* Card */}
      
      {/* Actions */}
      
    </div>
  );
}