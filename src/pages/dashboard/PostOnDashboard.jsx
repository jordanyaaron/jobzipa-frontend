import { Link , useNavigate , useOutletContext } from 'react-router-dom';
import toast , { Toaster } from 'react-hot-toast';
import { backendBaseUrl } from "../../utils/urls";
import { Bars3Icon, XMarkIcon , PlusIcon , PencilIcon , RectangleStackIcon } from '@heroicons/react/24/outline';
import { countries , categories } from "@/data/post-page";
import api from '../../api/axios'
import React, { useEffect, useRef, useState ,useCallback} from "react";
import Cropper from "react-easy-crop";
import QuillEditor from '../../components/QuilEditor';
import logoAddIcon from '../../assets/icons/gallery.png';
import closeIcon from '../../assets/icons/close.png';
import plusIcon from '../../assets/icons/plus.png';
import removeLogoIcon from '../../assets/icons/removeImg.png';
import JobzipaLogo from '../../assets/logos/jobzipa.png';
// import plusIcon from '../../assets/icons/plus.png';


export default function PostOnDashboard ({ darkMode , setDarkMode })  {
    const { setSidebarOpen } = useOutletContext();
    const fileInputRef = useRef(null); // tunatumia ref ku-access input
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [biography, setBiography] = useState("");
    const [jobDescriptions, setJobDescriptions] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [title, setTitle] = useState("");
    const [position, setPosition] = useState("");
    const [locationRigion, setLocationRegion] = useState("");
    const [locationCountry, setLocationCountry] = useState("");
    const [locations, setLocations] = useState([]);
    const [tags, setTags] = useState([]);
    const [mode, setMode] = useState("ON");
    const [type, setType] = useState("FT");
    const [applicationLink,setApplicationsLink ] = useState("");
    const [cropperDisplay,setCropperDisplay ] = useState("none");
    const [isSubmitCommand,setIsSubmitComand ] = useState(false); // for location 
    const [, ] = useState("");
    const [companyLogo, setCompanyLogo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const [isMultiple, setIsMultiple] = useState(false); // checkbox state
    const [positionType, setPositionType] = useState("number"); // input type
    const [positionValue, setPositionValue] = useState(""); // input value
    const [imageSrc, setImageSrc] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [errors, setErrors] = useState({});
    const [isPostCommand, setIsPostCommand] = useState(false);
    const isAuthenticated = useState(false);

  
    
    // const ac = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); 

    // REFS FOR EVERY INPUT LOCATION
    const logPickerRef = useRef(null);
    const companyNameRef = useRef(null);
    const biographyRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionsRef = useRef(null);
    const positionRef = useRef(null);
    const locationRef = useRef(null);
    const dateRef = useRef(null);
    // const applicationLink = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    // REFS FOR EVERY INPUT LOCATION
    const bioQuill = useRef(null);
    const descriptionQuill = useRef(null);
    const companyNameFieldRef = useRef(null);
    const biographyFieldRef = useRef(null);
    const titleFieldRef = useRef(null);
    const descriptionsFieldRef = useRef(null);
    const positionFieldRef = useRef(null);
    const regionFieldRef = useRef(null);
    const countryFieldRef = useRef(null);
    const onsiteFieldRef = useRef(null);
    const jobTypeFieldRef = useRef(null);
    const jobModeFieldRef = useRef(null);
    const appLinkFieldRef = useRef(null);
    // const FieldRef = useRef(null);
    
    // Date Data
    const [dateData, setDateData] = useState({
        actual_date: "",
        deadline_date: ""
      })
    const handleChange = (e) => {
        setDateData({
          ...dateData,
          [e.target.name]: e.target.value
        })
      }
   
    

    //  SUBMITION HANDLER ( Form validation )
        const handleSubmit = async () => {
            console.log('Handling Submit')
            let newErrors = {};
            if (!createCroppedImage){newErrors.logo = "Logo is equired!";} 
            if (!companyName.trim()){ newErrors.name = "Company name is required!";}  
            if (!biography){newErrors.biography = "Biography is equired!";}   
            if (!title.trim()){newErrors.title = "Title is required!";}   
            if (!jobDescriptions.trim()){newErrors.description = "Job description's required!";}   
            if (!positionValue.trim()){newErrors.position = "Position should not be empty!";}
            let finalLocations = [...locations];

            // Kama kuna kitu kimeandikwa kwenye input
            if (locationRigion && locationRigion.trim() !== "") {
                const result = buildNewLocationIfValid();

                if (result.error) {
                    newErrors.locations = result.error;
                } else {
                    finalLocations.push(result.location);
                }
            }

            // Kama bado hakuna location
            if (finalLocations.length === 0) {
                newErrors.locations = "At least one location is required!";
            }
            
            
            
            if (isQuillContentEmpty(jobDescriptions)) {
                {newErrors.description = "Job description's required!";} 
            }
            if (isQuillContentEmpty(biography)) {
                {newErrors.biography = "Biography is equired!";} 
            }

            const { actual_date, deadline_date } = dateData

            const isIncomplete = (date) => {
                if (!date) return false
                return date.length !== 10
            }

            if (isIncomplete(actual_date)) {
                newErrors.dates = "Actual date is incomplete. Finish it or remove it."
            }

            if (isIncomplete(deadline_date)) {
                newErrors.dates = "Deadline date is incomplete. Finish it or remove it."
            }
              

            // setErrors(newErrors);

            // scroll to first input with error
                // Kama kuna errors
            if (Object.keys(newErrors).length > 0) {
                // Pata key ya kwanza yenye error
                const firstErrorKey = Object.keys(newErrors)[0];

                // Scroll kwenye field husika
                const refMap = {
                    logo: logPickerRef,
                    name: companyNameRef,
                    biography: biographyRef,
                    title: titleRef,
                    description: descriptionsRef,
                    position: positionRef,
                    locations : locationRef ,
                    dates: dateRef
                };

                const firstRef = refMap[firstErrorKey];
                if (firstRef?.current) {
                    firstRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                }

                // Set only one error to display
                toast.error(newErrors[firstErrorKey]);
                // setErrors({ [firstErrorKey]: newErrors[firstErrorKey] });
                return;
            }  
            handlePostJob(finalLocations);
            setHandlePostJobFromHeader(false)
        };

        // HELPER FUNCTION FOR handleSubmitFunction 
        const buildNewLocationIfValid = () => {
            if (!locationRigion || !locationRigion.trim()) {
                return { error: "Please enter a region or city!" };
            }
        
            const duplicate = locations.some(
                (loc) =>
                    loc.locationRigion.toLowerCase() === locationRigion.trim().toLowerCase() &&
                    loc.locationCountry.toLowerCase() === locationCountry.toLowerCase()
            );
        
            if (duplicate) {
                return { error: "This location already exists" };
            }
        
            return {
                location: {
                    locationRigion: locationRigion.trim(),
                    locationCountry
                }
            };
        };

    //  SUBMITION HANDLER ( Posting after a form validation) 
        const handlePostJob = async (finalLocations) => {
            console.log("🔥 handlePostJob CALLED!");
            console.log("🔥🔥🔥 WE GOT ",locations.length, ' IN HERE Thank you');

            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", jobDescriptions);
            formData.append("biography", biography);
            formData.append("company", companyName);
            formData.append("location", JSON.stringify(finalLocations)); 
            formData.append("tags", JSON.stringify(tags));
            formData.append("job_type", type);
            formData.append("job_mode", mode);
            formData.append("position", positionValue);
            formData.append("actual_date", dateData.actual_date)
            formData.append("deadline_date", dateData.deadline_date)
            formData.append("application_link", applicationLink);
            if (companyLogo) formData.append("company_logo", companyLogo);

            setIsLoading(true)
            
            const token = localStorage.getItem("access")
                
            console.log({
                job_mode: mode,
                application_link: applicationLink,
            });
        
            try {
                await api.post(
                    "jobs/create/" , 
                    formData ,
                    {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setIsLoading(false)
                toast.success("Job posted successfully!");
                resetJobForm()
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
                // Reset form state
            } catch (error) {
                setIsLoading(false)
                console.error("Post Job Error:", error.response || error);
                toast.error("Failed to post job. Please try again.");
            }
        };

        const resetJobForm = () => {
            // resting state
            setTitle("");
            setJobDescriptions("");
            setBiography("");
            setCompanyName("");
            setLocations([]);
            setTags([]);
            setType("FT");
            setMode("ON");
            setPositionValue("");
            setIsMultiple(false)
            setLocationRegion('')
            setLocationCountry('')
            setApplicationsLink('');
            handleRemoveLogo()
            bioQuill.current?.clear();
            descriptionQuill.current?.clear();
          };
          
        const isQuillContentEmpty = (html) => {
            if (!html) return true;
            const temp = document.createElement("div");
            temp.innerHTML = html;
            // chukua maandishi halisi
            const text = temp.textContent || temp.innerText || "";
            return text.trim().length === 0;
        };
          
           


    //  LOGO PICKER OPEN
        const handleButtonClick = () => {
            fileInputRef.current.click();
        };

    //  LOGO CHANGE HANDLER
        const handleFileChange = (e) => {
                const file = e.target.files?.[0];
                if (file) {
                const imageURL = URL.createObjectURL(file);
                setSelectedImage(imageURL);
                setCrop({ x: 0, y: 0 }); // reset crop state
                setZoom(1);
            }
            
            // reader.readAsDataURL(file);
            setCropperDisplay("block");
        };

    //  Crop complete
        const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
            setCroppedAreaPixels(croppedAreaPixels);
        }, []);

    //  Helper function to generate cropped image
    //  CROPING LOGO IMAGE
        const createCroppedImage = async () => {
            try {
            const image = await createImage(selectedImage);
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            canvas.width = croppedAreaPixels.width;
            canvas.height = croppedAreaPixels.height;

            ctx.drawImage(
                image,
                croppedAreaPixels.x,
                croppedAreaPixels.y,
                croppedAreaPixels.width,
                croppedAreaPixels.height,
                0,
                0,
                croppedAreaPixels.width,
                croppedAreaPixels.height
            );

            const base64Image = canvas.toDataURL("image/jpeg");
            const file = base64ToFile(base64Image, "company_logo.jpg");
            setCompanyLogo(file);
            setCroppedImage(base64Image);
            setSelectedImage(null);
            } catch (e) {
            console.error(e);
            }
        };


        // 🔹 HELPER FUNCTION (nje)
        function base64ToFile(base64, filename) {
            const arr = base64.split(",");
            const mime = arr[0].match(/:(.*?);/)[1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);

            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }

            return new File([u8arr], filename, { type: mime });
        }

    //  Utility to load image
        const createImage = (url) =>
            new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener("load", () => resolve(image));
            image.addEventListener("error", (error) => reject(error));
            image.setAttribute("crossOrigin", "anonymous");
            image.src = url;
        });

    //  CANCEL CROPPING
        const handleCancelCropping = () => {
            setSelectedImage(null);
            setSelectedImage(null);
        };

    //  CANCEL CROPPING
        const handleRemoveLogo = () => {
            setCroppedImage(null);
            setSelectedImage(null)
        };

    //  BACK CROPPING
        useEffect(() => {
            const handleBack = (event) => {
                // condition yako
                if (window.confirm("Una hakika unataka kurudi nyuma?")) {
                console.log("User anajaribu kurudi nyuma");
                } else {
                // block back
                navigate(1); // stay kwenye page
                }
            };

            window.addEventListener("popstate", handleBack);

            return () => window.removeEventListener("popstate", handleBack);
        }, [navigate]);

    //  BIOGRAPHY CROPPING
        const handleBioChange = (value) => {
            setBiography(value); // update useState kila change
        };

    
    // DESCIPTION OF JOB 
        const handleContentChange = (value) => {
            setJobDescriptions(value); // update useState kila change
        };
       

    //  ADD TAGS
        const handleSelectChange = (e) => {
            const value = e.target.value;

            if (!value) return;

            // Check duplicates
            if (tags.includes(value)) {
            toast.error("This tag is already added!");
            e.target.value = ""; // reset select
            return;
            }

            // Add tag
            setTags([...tags, value]);
            toast.success(`Tag "${value}" added!`);
            e.target.value = ""; // reset select after adding
        };

    //  REMOVE TAGS
        const handleRemoveTag = (index) => {
            const removed = tags[index];
            setTags(tags.filter((_, i) => i !== index));
            toast.success(`Tag "${removed}" removed!`);
        };

    //  ADD LOCATION
        const handleAddLocation = () => {
            
            const duplicate = locations.some(
            (loc) =>
                loc.locationRigion.toLowerCase() === locationRigion.trim().toLowerCase() &&
                loc.locationCountry.toLowerCase() === locationCountry.toLowerCase()
            );

            if (!locationRigion) {
                toast.error('Please enter a region or city!');
                return;
            }


            if (duplicate) {
                toast.error('This location already exists');
                return;
            }
            // if (!locationRigion.trim() || !locationCountry) return;
            const newLocation = { locationRigion: locationRigion.trim(), locationCountry };
                setLocations((prev) => [...prev, newLocation]);
                setLocationRegion("");
                setLocationCountry("");
        };

    //  ADD LOCATION ON SUBMIT IF ANY
        const handleAddLocationOnSubmit  = () => {
        const region = locationRigion.trim();
        const country = locationCountry.trim();


        console.log('LOCATION IS:' + region)
      
    // 1️⃣ Copy current locations
        let finalLocations = [...locations];
      
    // 2️⃣ Auto-add input location ikiwa ipo na si duplicate
        if (region) {
          const duplicate = finalLocations.some(
            (loc) =>
              loc.locationRigion.toLowerCase() === region.toLowerCase() &&
              loc.locationCountry.toLowerCase() === country.toLowerCase()
          );
      
          if (!duplicate) {
            finalLocations.push({ locationRigion: region, locationCountry: country });
            setLocations(finalLocations)

            console.log("LOCATION NUMBER IS",setLocations.length)
            console.log(finalLocations.length)
            console.log({finalLocations})
          } else {
            toast.error("This location already exists!");
          }

        }
      
        // 3️⃣ Check if after this, locations is empty
        if (finalLocations.length === 0) {
          toast.error("At least one location is required!");
          return;
        }
      
        // 4️⃣ Use finalLocations to submit (API / whatever)
        console.log("Submitting locations:", finalLocations);
      
        // 5️⃣ Clear input fields
        setLocationRegion("");
        setLocationCountry("");
      
        // 6️⃣ Optional: update state if you want list to reflect new addition
        setLocations(finalLocations);
      };
      
    
    //  REMOVE LOCATION
        const handleRemoveLocation = (index) => {
            setLocations((prev) => prev.filter((_, i) => i !== index));
        };


    //  CHECKBOX
        const handleCheckboxChange = (e) => {
            const checked = e.target.checked;
            setIsMultiple(checked);

            if (checked) {
                setPositionType("text");
                setPositionValue("multiple Positions");
            } else {
                setPositionType("number");
                setPositionValue("");
            }
        };

    return(
        <>
            <header className="fixed lg:hidden top-0 left-0 w-[100vw] z-40 border-b border-[var(--border)] bg-[var(--background)]">
                <div className='flex gap-3 items-center justify-between px-4 h-16'>
                    <div 
                        className='
                            flex-1 items-center 
                            justify-start h-16
                        '
                    >
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="p-2 rounded-lg hover:bg-[var(--hover)]"
                        >
                            <Bars3Icon className="h-6 w-6 text-[var(--text)]" />
                        </button>

                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img src={JobzipaLogo} alt="Jobzipa" className="h-9" />
                        </Link>
                    </div>
                    <div 
                        className='
                            items-center 
                            justify-between h-16 w-16
                        '
                    >
                        <button
                            onClick={handleSubmit}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700"
                        >
                            <PlusIcon className="h-5 w-5 text-white" />
                            Post
                        </button>
                    </div>
                </div>
                {/* Top bar */}
                <div className="flex items-center justify-between px-4 h-16">
                    {/* Sidebar toggle */}
                    

                    {/* Right actions */}
                    <div className="flex  items-center gap-3 relative">
                        <button
                            onClick={handleSubmit}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700"
                        >
                            <PlusIcon className="h-5 w-5 text-white" />
                            Post
                        </button>
                    </div>
                </div>
                
            </header>
            <div className='post-on-dashboard w-full overflow-x-hidden scrollbar-hide
                            m-0 lg:w-full flex justify-center  lg:mt-0' >
                <div
                    className="
                        mt-[64px] lg:mt-0
                        w-[calc(100vw-40px)] lg:w-[720px]
                    "
                >
                    <div 
                        className="
                            m-0
                        "
                    >
                        {/* Organisation */}
                        
                        <h1 className="
                            text-[#3E907D] 
                            dark:text-[#ebf3f2]
                                font-black 
                                mb-0 
                                mt-[20px] text-lg md:text-xl  
                                lg:text-2xl lg:mb-[30px]
                            "
                        >
                            Organisation Details
                        </h1>
                        <div className=" mt-[20px] ">
                            {/* <h3>Organisation Logo</h3>*/}
                            {!imageSrc && !croppedImage ? (
                                <button ref={logPickerRef}
                                    className="
                                        h-[100px]  md:h-[125px] lg:h-[150px]
                                        w-[calc(100%-27px)] lg:w-[calc(100%-57px)]
                                        m-[20px] lg:m-[20px]
                                        mt-5
                                        ml-[7px] lg:ml-[27px]
                                        flex
                                        flex-col
                                        justify-center
                                        items-center
                                        text-center
                                        overflow-hidden
                                        rounded-[20px] md:rounded-[30px]
                                        cursor-pointer
                                        border-0
                                        bg-gradient-to-r
                                        from-[#3E907D]
                                        to-[#061a1fbb]
                                        hover:from-[#142a25]
                                        hover:to-[#061a1fbb]
                                        dark:from-[#b3baead6]
                                        dark:to-[#3c6fae]
                                        dark:hover:from-[#b3baea]
                                        dark:hover:to-[#325e94]
                                        transition-all
                                        duration-300
                                        
                                    "   
                                    onClick={handleButtonClick}>
                                    <img 
                                        src={logoAddIcon} 
                                        alt="img-icon" 
                                        className="
                                            h-[20px] lg:h-[30px] 
                                            w-[20px] lg:w-[30px]
                                            mt-[15px] mb-[10px] md:mb-[15px]  cursor-pointer self-center
                                        " 
                                    />
                                    <p  
                                        className="
                                            text-white font-thin text-sm md:text-lg text-xcursor-pointer
                                        "
                                    >
                                        Tap here to add company logo
                                    </p>
                                </button>
                                ) : (
                                    <div 
                                        className="
                                            relative  inline-block 
                                            w-[150px] md:w-[175px] lg:w-[200px] 
                                            ml-[15px] md:ml-[30px]
                                        "
                                    >

                                        {/* Logo Image */}
                                        <img
                                            src={croppedImage || imageSrc}
                                            alt="Logo Preview"
                                            className="
                                                w-[100px] md:w-[125px] lg:w-[150px]
                                                h-[100px]  md:h-[125px] lg:h-[150px]
                                                object-cover
                                                rounded-lg
                                                border
                                                border-gray-300
                                                dark:border-slate-600
                                            "
                                        />

                                        {/* Floating Buttons */}
                                        <div className="absolute top-1 right-1 flex flex-col gap-2">
                                            <button
                                                onClick={handleRemoveLogo}
                                                className="
                                                    flex items-center justify-center
                                                    w-6 md:w-7  lg:w-8   h-6  md:h-7  lg:h-8
                                                    rounded-lg
                                                    cursor-pointer
                                                    hover:bg-red-900
                                                    hover:text-white
                                                    bg-gray-800 dark:bg-gray-200
                                                    text-white dark:text-gray-800
                                                    hover:bg-gray-700
                                                    dark:hover:bg-red-900
                                                    dark:hover:text-white
                                                    dark:hover:text-black
                                                    transition-colors duration-200
                                                "
                                            >
                                            <XMarkIcon className="w-4 h-4" />
                                            </button>

                                            <button
                                            onClick={handleButtonClick}
                                            className="
                                                flex items-center justify-center
                                               w-6 md:w-7  lg:w-8   h-6  md:h-7  lg:h-8
                                                rounded-lg
                                                bg-gray-800 dark:bg-gray-200
                                                text-white dark:text-gray-800
                                                hover:bg-gray-700 dark:hover:bg-gray-300
                                                transition-colors duration-200
                                            "
                                            >
                                            <PencilIcon className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                            
                            {errors.logo && (
                                <p className='error-displayer'>{errors.logo}</p>
                            )}
                            <input ref={fileInputRef} type="file" id="logoInput" className="hidden" accept="image/*"  onChange={handleFileChange}/>
                        </div>
                        <div className="m-[10px]">
                            <h3 className='text-sm md:text-lg  lg:text-xl   font-normal text-gray-800 dark:text-gray-200 h-auto'>Company Name</h3> 
                            <div 
                                className="
                                    pt-0
                                    mx-2 lg:mx-5
                                    mb-5
                                    border-0
                                " 
                                ref={companyNameRef}
                            >
                                <input 
                                    type="text" 
                                    className="
                                        w-full
                                        mx-0
                                        my-0
                                        mt-[15px] lg:mt-[20px]
                                        pt-4 pb-4 md:pt-6 md:pb-6
                                        px-1.5 md:px-2.5
                                        text-sm md:text-lg  
                                        rounded-md
                                        border
                                        border-[var(--border)]
                                        bg-transparent
                                        text-[var(--text)]
                                        focus:outline-none
                                        focus:ring-2 focus:ring-green-500
                                        transition-colors duration-300
                                    "
                                    placeholder='Enter Company Name . . .' 
                                    value={companyName} 
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                                {/* <p style={{ color: "red", margin: "5px 0 0 0" }}>please add a company logo img</p> */}
                                {errors.name && (
                                    <p className='error-displayer'>{errors.name}</p>
                                )}
                            </div>
                        </div>

                        <div className="m-[10px] relative" ref={biographyRef}>
                            <h3 className='text-sm md:text-lg  lg:text-xl   font-normal text-gray-800 dark:text-gray-200 h-auto'>Company Biography</h3> 
                            {errors.biography && (
                                <p className='error-displayer for-qiull'>{errors.biography}</p>
                            )}
                            <div id='company-bio-wrapper'  className=' h-[calc(100vh-100px)] mx-5 pt-[20px] relative'>
                                <QuillEditor 
                                    ref={bioQuill}
                                    value={biography} 
                                    onChange={handleBioChange} 
                                    placeholder="Describe about the company..."
                                    
                                />
                            </div> 
                            <div className=" m-[30px] mt-[70px]">
                                <p className='font-semibold text-gray-800 dark:text-gray-200'>Hints:</p>
                                <p className=' text-xs text-gray-500 dark:text-gray-400 mx-5'>Company History(shortly), Mission, Vision, Products/Services, Future Goals, Values, Leadership, Culture, Achievements.</p>
                            </div>
                        </div>
                    </div>

                    <div className="datail-box">
                        {/* Job */}
                        <h1 className="
                            text-[#3E907D] 
                            dark:text-[#ebf3f2]
                                font-black 
                                mb-0 
                                mt-[20px] text-lg md:text-xl  lg:text-2xl 
                            "
                        >
                            Job Details
                        </h1>
                        <div className="m-[10px]" ref={titleRef}>
                            <h3 className='text-sm md:text-lg  lg:text-xl  font-normal text-gray-800 dark:text-gray-200 h-auto'>Job title</h3>
                            <div 
                                className="
                                    pt-0
                                    mx-2 lg:mx-5
                                    mb-5
                                    border-0
                                " 
                            >
                                <input 
                                    type="text" placeholder='Enter Job Title . . .'
                                    className="
                                        w-full
                                        mx-0
                                        my-0
                                        mt-[15px] lg:mt-[20px]
                                        pt-4 pb-4 md:pt-6 md:pb-6
                                        px-1.5 md:px-2.5
                                        text-sm md:text-lg  
                                        rounded-md
                                        border
                                        border-[var(--border)]
                                        bg-transparent
                                        text-[var(--text)]
                                        focus:outline-none
                                        focus:ring-2 focus:ring-green-500
                                        transition-colors duration-300
                                    " 
                                    value={title} 
                                    onChange = {(e) => setTitle(e.target.value)} 
                                />
                                {errors.title && (
                                    <p className='error-displayer'>{errors.title}</p>
                                )}
                            </div> 
                        </div>
                        <div className="m-[10px]" ref={descriptionsRef}>
                            <h3 className='text-sm md:text-lg  lg:text-xl  font-normal text-gray-800 dark:text-gray-200 h-auto'>Job Descriptions</h3>
                            {errors.description && (
                                <p className='error-displayer for-quill'>{errors.description}</p>
                            )}
                            <div id='company-bio-wrapper'   className="h-[calc(100vh-100px)] mx-5 pt-[20px]">
                                <QuillEditor 
                                    ref={descriptionQuill}
                                    value={jobDescriptions} 
                                    onChange={handleContentChange} 
                                    placeholder="Describe the role, responsibilities, and requirements..."
                                    darkMode={darkMode}
                                />
                            </div> 
                            <div className=" m-[30px] mt-[70px]">
                                <p className='font-semibold text-gray-800 dark:text-gray-200 '>Hints:</p>
                                <p className='text-xs text-gray-500 dark:text-gray-400 mx-5'>Responsibility, Purpose, Skills, Knowledgy,Qualifictions, Experiences.</p>
                            </div>
                        </div>
                        <div className="m-[10px]" ref={positionRef}>
                            <h3 className='text-sm md:text-lg  lg:text-xl  mb-[15px] font-normal text-gray-800 dark:text-gray-200 h-auto'>Job Positions</h3> 
                            <div 
                                className="
                                    pt-0
                                    mx-2 lg:mx-5
                                    mb-5
                                    border-0
                                "
                            >
                                <div className='display-block mb-[10px] relative'>
                                    <input 
                                        type="checkbox" 
                                        className='h-[20px] w-[20px] absolute t-[10px]'
                                        id="is_multiple_checkbox" 
                                        checked={isMultiple}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label 
                                        htmlFor=""
                                        className='text-xs md:text-sm  lg:text-lg  ml-[30px] text-gray-700 dark:text-gray-400'
                                    >Multiple Positions</label>
                                </div>
                                <div 
                                    className='
                                        relative
                                        mb-[20px]
                                        h-[55px] lg:h-[70px]
                                        w-[calc(100vw-80px)] lg:w-[320px]
                                        mt-[15px] lg:mt-[20px]
                                        width: calc(320px);
                                        rounded-md
                                        bg-transparent
                                        text-[var(--text)]
                                        
                                    '
                                >
                                    {isMultiple ? (
                                        <span
                                            className='
                                                absolute
                                                ml-[10px]
                                                mt-[16px]
                                            '
                                        >Multiple</span>
                                        ) : (
                                            <input 
                                                // className='number-input' 
                                                type='number'
                                                value={positionValue}
                                                className='
                                                    w-full
                                                    mx-0
                                                    my-0
                                                    mt-[2px] lg:mt-[5px]
                                                    pt-4 pb-4 md:pt-4 md:pb-4
                                                    px-1.5 md:px-2.5
                                                    text-sm md:text-lg  
                                                    relative
                                                    rounded-md
                                                    border
                                                    border-[var(--border)]
                                                    bg-transparent
                                                    text-[var(--text)]
                                                    focus:outline-none
                                                    focus:ring-2 focus:ring-green-500
                                                    transition-colors duration-300
                                                '
                                                name="" id="" step="1" min="0"  
                                                placeholder='Specify number of position here...'   
                                                onChange = {(e) => setPositionValue(e.target.value)} 
                                            />
                                        )
                                    }
                                </div>
                                {errors.position && (
                                    <p className='error-displayer'>{errors.position}</p>
                                )}
                            </div>

                        </div>

                        <div ref={locationRef} className="m-[10px] mt-[15px] lg:mt[20px]">
                            <h3  className='text-sm md:text-lg  lg:text-xl  mb-[15px] font-normal text-gray-800 dark:text-gray-200 h-auto'  >Job Locations:</h3>
                            {locations.length > 0 && (
                                <ul 
                                    id="location-list" 
                                    className='
                                        w-[calc(100% - 40px)]
                                        ml-[10px] lg:ml-[20px]
                                        pl-[0px]
                                    ' 
                                    style={{ marginTop: "15px" }}>
                                    {locations.map((loc, index) => (
                                        <li 
                                            key={index}
                                            className='
                                            text-gray-700 dark:text-gray-500
                                            relative inline-block mr-1 mt-1 mb-1 h-[40px] max-w-[200px] 
                                            px-[25px] pt-[5px]  pr-[15px] text-[14px] rounded-[30px] 
                                            bg-[#3e907d38] dark:bg-[#3e907d38] flex items-start
                                            '
                                        >
                                        {/* Close icon */}
                                        <button 
                                        onClick={() => handleRemoveLocation(index)} 
                                        className="
                                            ml-0
                                            absolute
                                            ml-[-15px]
                                            mt-[3px]
                                            mt-[0px] p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors
                                        "
                                        >
                                        <XMarkIcon className="w-4 h-4 text-gray-700 dark:text-gray-500" />
                                        </button>
                                    
                                        {/* Location text */}
                                        <span 
                                            className="
                                                inline-block
                                                relative
                                                mt-[3px]
                                                ml-[10px]
                                                max-w-[145px]
                                                overflow-hidden whitespace-nowrap text-ellipsis 
                                            text-gray-700 dark:text-gray-500
                                            "
                                        >
                                        {loc.locationCountry === '' 
                                            ? loc.locationRigion 
                                            : `${loc.locationRigion}, ${loc.locationCountry}`
                                        }
                                        </span>
                                    </li>
                                    ))}
                                </ul>
                            )}
                            <div className="m-0"  >
                                <div
                                    className="
                                        pt-0
                                        mx-2 lg:mx-5
                                        mb-5
                                        border-0
                                    " 
                                >
                                    <input 
                                        type="text"
                                        className="
                                            w-full
                                            mx-0
                                            my-0
                                            mt-[15px] lg:mt-[20px]
                                            pt-4 pb-4 md:pt-6 md:pb-6
                                            px-1.5 md:px-2.5
                                            text-sm md:text-lg  
                                            rounded-md
                                            border
                                            border-[var(--border)]
                                            bg-transparent
                                            text-[var(--text)]
                                            focus:outline-none
                                            focus:ring-2 focus:ring-green-500
                                            transition-colors duration-300
                                        " 
                                        placeholder="Enter Region/City . . ." 
                                        onChange = {(e) => setLocationRegion(e.target.value)} 
                                        value={locationRigion}
                                    />
                                    {errors.locations && (
                                        <p className='error-displayer'>{errors.locations}</p>
                                    )}
                                </div> 
                            </div>
                            <div 
                                className="
                                    ml-2 lg:ml-5
                                    w-[calc(100vw-100px)] md:w-[280px]
                                    relative
                                    block
                                    h-[50px] lg:h-[60px]
                                    p-0
                                    text-base
                                    rounded
                                    box-border
                                    overflow-hidden
                                "
                            >
                                <i
                                    className="
                                        absolute
                                        right-[13px]
                                        top-[20px] lg:top-[25px]
                                        block
                                        h-[6px]
                                        w-[6px]
                                        border-2
                                        border-[var(--border)]
                                        border-t-0
                                        border-l-0
                                        rotate-45
                                        pointer-events-none
                                    "
                                ></i>
                                <select 
                                    id="location-country" 
                                    className={`
                                        absolute
                                        w-full
                                        h-[50px] lg:h-[60px]
                                        text-sm  lg:text-lg
                                        m-0
                                        pl-2 pr-2 pl-5 pr-6 
                                        bg-transparent
                                        appearance-none
                                        border
                                        border-[var(--border)]
                                        text-[(--text)]
                                        rounded
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-emerald-500
                                        focus:border-emerald-500${locationCountry === "" 
                                            ? "text-gray-400 dark:text-gray-500" 
                                            : "text-gray-700 dark:text-gray-200"
                                        }
                                    `}
                                    value={locationCountry}
                                    name="country" 
                                    onChange={(e) => setLocationCountry(e.target.value)} >
                                    <option value=""  disabled hidden>--Select Country(Optional)--</option>
                                    {countries.map((country) => (
                                        <option key={country.value} value={country.value}>
                                        {country.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button 
                                id="add-location-btn"
                                className="
                                m-2 lg:m-5
                                mt-[10px]
                                border-0
                                text-sm md:text-lg  
                                text-white
                                cursor-pointer
                                rounded-md
                                flex items-center gap-2
                                bg-[#3E907D]
                                px-5
                                py-2.5
                                hover:bg-[#357c6c]
                                border-0
                                bg-gradient-to-r
                                from-[#3E907D]
                                to-[#061a1fbb]
                                hover:from-[#142a25]
                                hover:to-[#061a1fbb]
                                dark:from-[#b3baead6]
                                dark:to-[#3c6fae]
                                dark:hover:from-[#b3baea]
                                dark:hover:to-[#325e94]
                                transition-all
                                duration-300
                                active:scale-95
                                transition-all
                                duration-200
                            "  
                            onClick={handleAddLocation}><PlusIcon className="w-5 h-5" />add</button>
                        </div>

                        <div className="m-[10px] mt-[15px] lg:mt-[20px]">
                            <h3 className='text-sm md:text-lg  lg:text-xl  mb-[10px] font-normal text-gray-800 dark:text-gray-200 h-auto'>Job Categorisations</h3>
                            <div className="
                                    ml-[10px] mr-[10px] 
                                    lg:ml-[20px] lg:mr-[20px]
                                    grid grid-cols-2 gap-5
                                "
                            >
                                <div 
                                    className="
                                        col-span-1
                                    "
                                >
                                    <label 
                                    className='
                                            text-xs md:text-sm
                                            ml-0 text-gray-700 dark:text-gray-400
                                        '
                                   >Type</label>
                                    <div className="mr-0
                                            ml-0
                                            mt-[10px]
                                            h-[55px] lg:h-[60px]
                                            w-full
                                            relative
                                        "
                                    >
                                        <i 
                                            className="
                                                absolute
                                                right-[13px]
                                                top-[25px]
                                                block
                                                h-[6px]
                                                w-[6px]
                                                border-2
                                                border-[var(--border)]
                                                border-t-0
                                                border-l-0
                                                rotate-45
                                                pointer-events-none
                                            "
                                        ></i>
                                        <select 
                                            id="job-type" 
                                            className={`
                                                text-xs md:text-sm
                                                absolute
                                                w-full
                                                h-[55px] lg:h-[60px]
                                                mt-[5px]
                                                p-5
                                                bg-transparent
                                                appearance-none
                                                border
                                                border-[var(--border)]
                                                text-[var(--text)]
                                                rounded
                                                focus:outline-none
                                                focus:ring-2
                                                focus:ring-emerald-500
                                            `}
                                            name="job-type" 
                                            value={type} 
                                            onChange={(e) => setType(e.target.value)} >
                                            <option value="FT">Full-Time</option>
                                            <option value="PT">Part-Time</option>
                                            <option value="CT">Contract</option>
                                            <option value="FL">Freelancing</option>
                                            <option value="IN">Internship</option>
                                        </select>
                                    </div>
                                </div>
                                <div 
                                    className="
                                        col-span-1
                                    "
                                >
                                    <label 
                                        className='
                                            text-xs md:text-sm
                                            ml-0 text-gray-700 dark:text-gray-400
                                        '
                                    >Mode</label>
                                    <div 
                                        className="
                                            mr-0
                                            ml-0
                                            mt-[15px]
                                            h-[55px] lg:h-[60px]
                                            w-full
                                            relative
                                        "
                                    >
                                        <i 
                                            className="
                                                absolute
                                                right-[13px]
                                                top-[25px]
                                                block
                                                h-[6px]
                                                w-[6px]
                                                border-2
                                                border-[var(--border)]
                                                border-t-0
                                                border-l-0
                                                rotate-45
                                                pointer-events-none
                                            "
                                        ></i>
                                        <select 
                                            id="job-mode" 
                                            className={`
                                                absolute
                                                text-xs md:text-sm
                                                w-full
                                                h-[55px] lg:h-[60px]
                                                m-0
                                                p-5
                                                bg-transparent
                                                appearance-none
                                                border
                                                border-[var(--border)]
                                                text-[var(--text)]
                                                rounded
                                                focus:outline-none
                                                focus:ring-2
                                                focus:ring-emerald-500
                                            `}
                                            name="country" 
                                            value={mode} 
                                            onChange={(e) => setMode(e.target.value)} >
                                            <option value="ON">Onsite</option>
                                            <option value="RE">Remote</option>
                                            <option value="HY">Hybrid</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="relative block w-[calc(100%)] mt-[20px]">
                                    <label className='ml-0 mb-[10px] text-gray-700 dark:text-gray-400'>Tags</label>
                                    
                                    <ul 
                                        id="category-list" 
                                        className='
                                            w-[calc(100% - 10px)]
                                            ml-[20px]
                                            pl-0
                                        ' 
                                    >
                                        {tags.map((t, index) => (
                                        <li 
                                            key={index}
                                            className='
                                            text-gray-700 dark:text-gray-500
                                            relative inline-block mr-1 mt-1 mb-1 h-[40px] max-w-[300px] 
                                            px-[25px] pt-[5px]  pr-[15px] text-[14px] rounded-[30px] 
                                            bg-[#3e907d38] dark:bg-[#3e907d38] flex items-start
                                            '
                                        >
                                        {/* Close icon */}
                                        <button 
                                        onClick={() => handleRemoveTag(index)} 
                                        className="
                                            ml-0
                                            absolute
                                            ml-[-15px]
                                            mt-[3px]
                                            mt-[0px] p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors
                                        "
                                        >
                                        <XMarkIcon className="w-4 h-4 text-gray-700 dark:text-gray-500" />
                                        </button>
                                    
                                        {/* Location text */}
                                        <span 
                                            className="
                                                inline-block
                                                relative
                                                mt-[3px]
                                                ml-[10px]
                                                max-w-[265px]
                                                overflow-hidden whitespace-nowrap text-ellipsis 
                                            text-gray-700 dark:text-gray-500
                                            "
                                        >
                                        {t}
                                        </span>
                                    </li>
                                    ))}
                                </ul>
                                    <div 
                                        className="
                                                relative
                                                w-[140px]
                                                h-[50px]
                                                mt-[10px]
                                                overflow-hidden
                                        ">
                                        {/* <button><img src={plusIcon} alt="" /><span>Add Tags</span></button> */}
                                        <button 
                                            id="add-location-btn"
                                            className="
                                                absolute
                                                border-0
                                                text-[18px]
                                                text-white
                                                cursor-pointer
                                                rounded-md
                                                flex items-center gap-2
                                                bg-[#3E907D]
                                                px-5
                                                h-[50px]
                                                w-[140px]
                                                hover:bg-[#357c6c]
                                                border-0
                                                bg-gradient-to-r
                                                from-[#3E907D]
                                                to-[#061a1fbb]
                                                hover:from-[#142a25]
                                                hover:to-[#061a1fbb]
                                                dark:from-[#b3baead6]
                                                dark:to-[#3c6fae]
                                                dark:hover:from-[#b3baea]
                                                dark:hover:to-[#325e94]
                                                transition-all
                                                duration-300
                                                active:scale-95
                                                transition-all
                                                duration-200
                                            "  
                                            ><PlusIcon className="w-5 h-5" />add tag
                                        </button>
                                        <select 
                                            id="job-category" 
                                            className="
                                                appearance-none
                                                absolute
                                                h-[40px] lg:h-[50px]
                                                w-[120px] lg:w-[140px]
                                                p-[5px]
                                                border-0
                                                bg-transparent
                                                text-transparent
                                                cursor-pointer
                                                focus:outline-none
                                                focus:ring-0
                                            " 
                                            name="job-category" 
                                            onChange={handleSelectChange}  >
                                            <option value=""  disabled ></option>
                                            {categories.map((cat) => (
                                                <option key={cat.value} value={cat.value}>
                                                {cat.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={dateRef}
                        className="
                            datail-box
                            mt-[40px]
                            mb-[40px]
                        "
                    >
                        <h1 className="
                                text-[#3E907D] 
                                dark:text-[#ebf3f2]
                                font-black 
                                mb-0 
                                mt-[20px] text-lg md:text-xl  lg:text-2xl 
                            "
                        >
                            Date Infos
                        </h1>

                        <div
                            className="
                                m-[10px]
                                ml-[35px]
                                mr-[35px]
                                grid grid-cols-2 gap-4
                            "
                        >
                            {/* Actual Date */}
                            <div className="col-span-2 md:col-span-1 flex flex-col">
                                <label 
                                    className="
                                        text-[var(--text)] mb-[10px]
                                    "
                                >
                                    Actual Date
                                </label>

                                <input
                                    type="date"
                                    name="actual_date"
                                    value={dateData.actual_date}
                                    onChange={handleChange}
                                    className="
                                        border 
                                        rounded-lg 
                                        px-3 
                                        py-1 lg:py-2 
                                        h-[50px] lg:h-[60px]
                                        p-5
                                        appearance-none
                                        border
                                        border-[var(--border)]
                                        bg-transparent
                                        text-[var(--text)]
                                        focus:outline-none
                                        focus:ring-2 focus:ring-green-500
                                        transition-colors duration-300
                                    "
                                />
                            </div>


                            {/* Deadline Date */}
                            <div className="col-span-2 md:col-span-1  flex flex-col">
                                <label className=' text-[var(--text)] mb-[10px]'>
                                    Deadline Date
                                </label>

                                <input
                                    type="date"
                                    name="deadline_date"
                                    value={dateData.deadline_date}
                                    onChange={handleChange}
                                    className="
                                        border 
                                        rounded-lg 
                                        px-3 
                                        py-1 lg:py-2 
                                        h-[50px] lg:h-[60px]
                                        p-5
                                        bg-transparent
                                        appearance-none
                                        border
                                        border-[var(--border)]
                                        bg-transparent
                                        text-[var(--text)]
                                        focus:outline-none
                                        focus:ring-2 focus:ring-green-500
                                        transition-colors duration-300
                                    "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="datail-box">
                        {/* Link  */}
                        <h1 className="
                            text-[#3E907D] 
                            dark:text-[#ebf3f2]
                                font-black 
                                mb-0 
                                mt-[20px] text-lg md:text-xl  lg:text-2xl 
                            "
                        >
                            Aplication Link
                        </h1>
                        <div className="m-[10px]">
                            <h3 className='text-sm md:text-lg  lg:text-xl  font-normal text-gray-800 dark:text-gray-200 h-auto'>Spesify Application link</h3>
                            <div 
                                className="
                                    pt-0
                                    mx-2 lg:mx-5
                                    mb-5
                                    border-0    
                                " 
                            >
                                <input 
                                    type="url" 
                                    className="
                                        w-full
                                        mx-0
                                        my-0
                                        mt-[15px] lg:mt-[20px]
                                        pt-4 pb-4 md:pt-6 md:pb-6
                                        px-1.5 md:px-2.5
                                        text-sm md:text-lg  
                                        rounded-md
                                        border
                                        border-[var(--border)]
                                        bg-transparent
                                        text-[var(--text)]
                                        focus:outline-none
                                        focus:ring-2 focus:ring-green-500
                                        transition-colors duration-300
                                    " 
                                    name="" 
                                    id="" 
                                    placeholder='Enter Job Application Link . . .'
                                    value={applicationLink} onChange = {(e) => setApplicationsLink(e.target.value)}  
                                />
                            </div> 
                        </div>
                    </div>

                    <div className="
                            relative
                            mt-[30px] lg:mt-[40px] mb-[30px] lg:mb-[40px]
                            mx-[10px]
                            h-[55px]
                            flex justify-left items-left
                        "
                    >
                        {/* Submit Button  */}
                        {/* <button 
                            onClick={handleSubmit}
                            className="
                                relative
                                block
                                w-[calc(100vw-20px)] md:w-[60%]
                                h-[55px]
                                rounded-[10px]
                                border-0
                                text-[22px]
                                text-white
                                bg-gradient-to-r
                                from-[#3E907D]
                                to-[#061a1fbb]
                                hover:from-[#142a25]
                                hover:to-[#061a1fbb]
                                dark:from-[#b3baead6]
                                dark:to-[#3c6fae]
                                dark:hover:from-[#b3baea]
                                dark:hover:to-[#325e94]

                                transition-all
                                duration-300
                                active:scale-95
                            "
                        >
                                Submit a job
                        </button> */}

                    </div>
                </div> 
            </div>
            <button 
                onClick={handleSubmit}
                className="
                    flex fixed 
                    top-1 right-1  lg:top-5 lg:right-5  
                    gap-1 px-3 py-2  lg:px-4 lg:py-3 
                    items-center 
                    rounded-[60px] text-white bg-green-600 hover:bg-green-700 shadow-lg flex items-center space-x-2 
                    hover:scale-110 transition-transform
                "
            >
                <div className="relative">
                    <PlusIcon className="h-6 w-6 text-white" />
                </div>
                <span className="font-medium text-white">Post Job</span>
            </button>
            {/* </main> */}
            <button className='test-rest' onClick={resetJobForm}>Reset Form</button>
            {isLoading && (
                <div className="loading-overlay">
                    <div className="spinner"></div>
                    <p>Posting job...</p>
                </div>
            )}
            <Toaster position="bottom-center" reverseOrder={false} />
          
            {selectedImage && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
                >
                    <div
                    className="
                        relative
                        w-[90%]
                        max-w-[400px]
                        h-[80vh]
                        max-h-[500px]
                        rounded-xl
                        bg-white
                        dark:bg-slate-900
                        shadow-2xl
                        border
                        border-gray-200
                        dark:border-slate-700
                        p-4
                        flex
                        flex-col
                    "
                    >
                    {/* Cropper Area */}
                    <div className="relative flex-1 overflow-hidden rounded-lg">
                        <Cropper
                        image={selectedImage}
                        crop={crop}
                        zoom={zoom}
                        aspect={4 / 4}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={onCropComplete}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between gap-3 mt-4">
                        <button
                        onClick={handleCancelCropping}
                        className="
                            flex-1
                            h-[45px]
                            rounded-lg
                            border
                            border-gray-300
                            dark:border-slate-600
                            text-gray-700
                            dark:text-gray-300
                            hover:bg-gray-100
                            dark:hover:bg-slate-800
                            transition
                        "
                        >
                        Cancel
                        </button>

                        <button
                        onClick={createCroppedImage}
                        className="
                            flex-1
                            h-[45px]
                            rounded-lg
                            text-white
                           bg-gradient-to-r
                            from-[#3E907D]
                            to-[#061a1fbb]
                            hover:from-[#142a25]
                            hover:to-[#061a1fbb]
                            dark:from-[#b3baead6]
                            dark:to-[#3c6fae]
                            dark:hover:from-[#b3baea]
                            dark:hover:to-[#325e94]
                            transition-all
                            duration-300
                            active:scale-95
                            transition-all
                            duration-200
                        "
                        >
                        Crop Logo
                        </button>
                    </div>
                    </div>
                </div>
                ) }
        </>
    );
}

