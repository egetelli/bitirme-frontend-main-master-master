import React, { useState, useEffect } from 'react';
import axios from 'axios'
import User from './User';
import Navbar from './Navbar';
import ParticlesBg from "particles-bg";
import Carousel, { CarouselItem } from "./Carousel";
import { Buffer } from 'buffer';
window.Buffer = window.Buffer || Buffer; 

const Campaign = () => {

    const [campaignName, setcampaignName] = useState('');
    const [campaignDescription, setcampaignDescription] = useState('');
    const [targetAmount, settargetAmount] = useState('');
    const [image, setImage] = useState('');
    const [oneImage, setOneImage] = useState('');
    const [campaigns, setCampaigns] = useState([]);
    const [imgUrls, setImgUrls] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/campaign')
            .then(res => {
                //console.log(res.data)

                setCampaigns(res.data)
                // const campaignData = JSON.parse(res.data);
                // setCampaigns(campaignData)

                setImgUrls(campaigns.map((campaign) => {
                    // console.log(campaign.campaignPicture)

                    // const campaignPictureData = campaign.campaignPicture.data;
                    // //create a blob from the buffer
                    // var blob = new Blob([campaignPictureData], {type: 'image/png'});
                    // //create object url from the blob
                    // return URL.createObjectURL(blob);

                    console.log(campaign.campaignPicture)
                    //access the data field using the dot notation
                    //convert to base64
                    if (campaign.campaignPicture) {
                        {
                            const campaignPictureData = Buffer.from(campaign.campaignPicture)
                            return `data:image/jpeg;base64,${campaignPictureData}`;

                        }
                        //const campaignPictureData = Buffer.from(campaign.campaignPicture).toString('base64');

                    }

                    //console.log("failed")
                }))

                // campaigns.map((campaign, index) => {
                //     setImgUrl(URL.createObjectURL(campaign.campaignPicture))
                // })

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(imgUrls);

    useEffect(() => {
        return () => {
            imgUrls.forEach(url => URL.revokeObjectURL(url));
        }
    }, [imgUrls])

    // useEffect(() => {
    //     axios.get('http://localhost:3000/api/campaign?_id=63c2f5e9c5d3de9a01abda62')
    //             .then(res => {
    //                 const imageData = `data:${res.data.campaignPicture.contentType};base64,${Buffer.from(res.data.campaignPicture.data).toString('base64')}`;
    //                 setOneImage(imageData);

    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    // }, [])
    // const data = {
    //     campaignName: campaignName,
    //     ownerAddress: "",
    //     campaignDescription: campaignDescription,
    //     campaignGoalAmount: targetAmount,
    //     campaignPicture: {
    //         data: image.file.base64,
    //         contentType: image.file.type,
    //     },
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('campaignName', campaignName);
        formData.append('ownerAddress', "");
        formData.append('campaignDescription', campaignDescription);
        formData.append('campaignGoalAmount', targetAmount);


        formData.append('campaignPicture', image)


        try {
            (async function post() {
                const result = await axios.post('http://localhost:3000/api/campaign', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
                console.log(result.data);
                //setcampaignName(data.campaignName)
                //setImage(data.image)
            })()

        } catch (error) {
            console.log(error);
        }
        //        console.log(campaignName,campaignDescription, targetAmount, image);
    }

    function handleImage(e) {

        setImage(e.target.files[0])
    }


    return (
        <div>
            <Navbar />
            <ParticlesBg num={100} type="cobweb" bg={true} />

            <div className="App">
                <div className="auth-form-container">
                    <h2 className="black font-bold text-2xl text-slate-50" >Create Campaign</h2>
                    <div className="row">
                        <div className="columns contact-details">
                            <form encType="multipart/form-data" className="campaign-form" onSubmit={handleSubmit}>
                                <label className="font-bold text-slate-50">Campaign Name:
                                    <br></br>
                                    <input
                                        value={campaignName} onChange={(e) => setcampaignName(e.target.value)}
                                        id="campaignName"
                                        className="bg-slate-400 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-cyan-500 
                                        focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                                        type="text"
                                    />
                                </label>
                                <label className="font-bold text-slate-50">Campaign Description:
                                    <br></br>
                                    <input
                                        value={campaignDescription} onChange={(e) => setcampaignDescription(e.target.value)}
                                        id="campaignDescription"
                                        className="bg-slate-400 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-cyan-500 
                                        focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                                        type="text"
                                    />
                                </label>
                                <label className="font-bold text-slate-50">Target Amount:
                                    <br></br>
                                    <input
                                        value={targetAmount} onChange={(e) => settargetAmount(e.target.value)}
                                        id="targetAmount"
                                        className="bg-slate-400 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-cyan-500 
                                        focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                                        type="text"
                                    />
                                </label>
                                <label className="font-bold text-slate-50">Campaign Photo:
                                    <br></br>
                                    {/* <FileBase64 onDone={(file) => setImage(file)} /> */}
                                    <div>
                                        <input type="file" name="image" onChange={handleImage} />
                                    </div>
                                </label>
                                <br></br>
                                <button className="text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    id="button" type="submit">
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
            <br></br>
            <hr className="h-px bg-green-200 border-0 dark:bg-gray-700"></hr>
            <div className="App1">
                <div className="auth-form-container">
                    <h2 className="text-center font-medium leading-tight text-4xl mt-0 mb-2 text-slate-50">Trending Campaigns</h2>
                    <div className="row">


                        <Carousel>
                            {
                                campaigns.map((campaign, index) =>



                                    <CarouselItem key={index}>


                                        <div className="card rounded-lg overflow-hidden shadow-md">
                                            <div className="px-6 py-4">
                                                <h2 className="text-xl font-medium text-gray-200">{campaign.campaignName}</h2>
                                                <p className="text-sm text-base text-gray-200 overflow-hidden">{campaign.campaignDescription}</p>
                                                <p className='font-bold text-blue-600'>Wallet-Address: 0xcb26c8019b506b927b19C46CbC823a364ee0E8ec</p>
                                            </div>
                                            <div className="px-6 py-4">
                                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2">Target Amount: ${campaign.campaignGoalAmount}</span>

                                            </div>
                                            <div className='px-6 py-4'>

                                                {console.log("imgUrls : ", imgUrls[index])}
                                                <img src={imgUrls[index]} alt="Campaign Picture" key={index} />


                                            </div>                                            
                                        </div>


                                    </CarouselItem>


                                )
                            }


                        </Carousel>
                    </div>
                </div>
                <div>

                    <form>
                        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                <label for="comment" class="sr-only">Your comment</label>
                                <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                            </div>
                            <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    Post comment
                                </button>
                                <div class="flex pl-0 space-x-1 sm:pl-2">
                                    <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Attach file</span>
                                    </button>
                                    <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Set location</span>
                                    </button>
                                    <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Upload image</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Campaign