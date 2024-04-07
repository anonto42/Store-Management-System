import React, { useState } from 'react'
import { FaArrowCircleDown, FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const ProductCart = () => {


  const data =[
    {
      img:"https://staticecp.uprinting.com/10796/250x250/DM-4881-01.jpg",
      title:"Mailer Boxes"
    },
    {
      img:"https://staticecp.uprinting.com/260/250x250/Vinyl_Banners_Marketing_Materials_A.jpg",
      title:"Vinyl Banners"
    },
    {
      img:"https://staticecp.uprinting.com/10910/250x250/Custom_Stickers_Gallery_Badge.jpg",
      title:"Stickers"
    },
    {
      img:"https://staticecp.uprinting.com/1812/250x250/Standard_Postcards_Marketing_Materials_B.jpg",
      title:"Postcards"
    },
    {
      img:"https://staticecp.uprinting.com/71/250x250/Business_Flyers_Restaurant_Advertising_Materials_A.jpg",
      title:"Flyers"
    },
    {
      img:"https://staticecp.uprinting.com/10176/250x250/Brochures_Marketing_Materials_A.webp",
      title:"Brochures"
    },
    {
      img:"https://staticecp.uprinting.com/6975/250x250/UP_CTS_Label_PDP_Image_B.jpg",
      title:"Labels"
    },
    {
      img:"https://staticecp.uprinting.com/7829/250x250/Apparel-Jackets-J317.png",
      title:"Jackets"
    },
    {
      img:"https://staticecp.uprinting.com/6987/250x250/UP_Roll_Stickers_PDP_Image_A.jpg",
      title:"Roll Stickers"
    },
    {
      img:"https://staticecp.uprinting.com/1070/250x250/Window_Decals_Small_Busisness_Advertising_Materials_A.jpg",
      title:"Decals"
    }
  ]

    function sendToQuistionPart(){
      window.scrollY = 555
    }
    
    const item={reating:2,}

    const images = [
      "https://staticecp.uprinting.com/260/250x250/Vinyl_Banners_Marketing_Materials_A.jpg",
      "https://scontent.fzyl2-2.fna.fbcdn.net/v/t45.1600-4/429013119_120207173936020238_7172691787705959260_n.jpg?stp=c0.88.526.526a_cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF_LaTQOZusq6r5BJ6P8Mnj-HdAPYRRtCr4d0A9hFG0Kr0UtKaK6NCuDiFvrFQXXomlmo1WEBiPiFzecUSwWRLc&_nc_ohc=bFWoKerFR0gAb6TaE-z&_nc_ht=scontent.fzyl2-2.fna&oh=00_AfCQO4jNF8-9gzgv8LKhC2s3VS_Hy4wSWizkqVsnWTar0A&oe=66180F3E",
      'https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/435335203_454618396994474_6319775153152898424_n.jpg?stp=cp6_dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHx14UCflKpH4k3xOBhagqUC9AMMNO_VNkL0Aww079U2QMGi5C8OaTk4Sko3NUIhEe5UT6VHVxUv9ElZlIanEo5&_nc_ohc=RxzkrkXpIX8Ab6ZsIcV&_nc_ht=scontent.fzyl2-2.fna&oh=00_AfALODgzWjJNA-4CIk94TBjupOWNIfIBsDw-542LTcXY8g&oe=661815AF'
    ]

    const [frontImgValue,setImgValue] = useState(images[0]);
    const [quistonText,setQuistonText] = useState();

  return (
    <div className='w-full h-auto mt-[80px]'>
      <div className='mt-16 relative'>
        <div className=' lg:w-[30%] lg:ml-[10%]'>
          <div className='flex justify-center'>
            <img className='w-[350px] h-[350px] easy-in' src={frontImgValue}/>
          </div>
          <div className='pl-[15%] sm:pl-[25%] md:pl-[32.5%] lg:pl-[1px] xl:pl-[38px] 2xl:pl-[58px]'>
            <div className='w-[350px] mt-10 flex relative' >
            {
              images.map((item,index)=><img key={index} onClick={()=>setImgValue(item)} src={item} className='w-[100px] cursor-pointer h-[100px] ml-3' />
            )
            }
              
            </div>
            <div className='hidden lg:flex justify-between w-[350px] px-3 mt-5'>
              <div className='text-yellow-400 text-[20px] font-[670] font-serif lg:text-[16.2px]'>
                    {
                      1 == 1? 
                      <div>
                        <span>&#9733;</span> 
                        <span>&#9734;</span> 
                        <span>&#9734;</span> 
                        <span>&#9734;</span> 
                        <span>&#9734;</span> 
                      </div> : <></> 
                            && 
                    2 == 2 ? 
                      <div>
                        <span>&#9733;</span> 
                        <span>&#9733;</span> 
                        <span>&#9734;</span> 
                        <span>&#9734;</span> 
                        <span>&#9734;</span> 
                      </div>  : <></>
                              &&
                    3 == 3 ?
                    <div>
                        <span>&#9733;</span> 
                        <span>&#9733;</span> 
                        <span>&#9733;</span> 
                        <span>&#9734;</span> 
                        <span>&#9734;</span> 
                      </div>  : <></>
                      &&
                      4 == 4 ?
                      <div>
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                        </div>  : <></>
                      &&
                      5 == 5 ?
                      <div>
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                        </div>  : <></>
                    }
              </div>
              <div>(89) <span className='text-[14px] font-serif font-[400]'>Ratings</span></div>
            </div>
        </div>


          <div className='flex lg:hidden justify-between mt-6 mx-8'>
            <h1 className='text-2xl font-bold'>Custom Stickers</h1>
            <div className='text-xs flex justify-center items-center'>
              <span className='text-[18px] text-[#e6e61b]'>&#9733;</span>
              <p>1889 Reviews |</p>
            </div>
          </div>
          <h2 onClick={()=>sendToQuistionPart()} className='flex cursor-pointer md:hidden justify-center underline italic font-light my-4'>Question & Answers ({'7'})</h2>
          <div className='flex justify-center'>
            <div className='w-[90%] flex text-white md:hidden text-2xl font-bold cursor-pointer hover:bg-[#1a924e] justify-center items-center h-[60px] bg-[#008338]'>ORDER NOW</div>
          </div>
        </div>
        {/* lllkkk kkkk */}
        <div className=''>
          <div className='lg:absolute -top-12 xl:right-[8%] lg:right-0 sm:border-2 sm:mx-10 sm:my-10'>
            <h1 className='flex md:r-[37%] md:mb-7 ml-8 text-sm font-bold mb-3 mt-8'>Sticker type:</h1>
            <div className='flex justify-center '>
              <div className='w-[90px] text-center flex justify-center items-center h-[80px] border-2'>
                <div className=''>
                  <div className='flex justify-center'>
                    <img src="https://staticecp.uprinting.com/6752/Cut-To-Size.svg" className='w-[30px]' />
                  </div>
                  <h2 className='text-sm text-c'>Singles</h2>
                </div>
              </div>
              <div className='w-[90px] flex justify-center items-center h-[80px] border-2 ml-5 sm:ml-6'>
              <div className=''>
                  <div className='flex justify-center'>
                    <img src="https://staticecp.uprinting.com/6760/Roll-Stickers.svg" className='w-[30px]' />
                  </div>
                  <h2 className='text-sm text-c'>Roll</h2>
                </div>
              </div>
              <div className='w-[90px] flex justify-center items-center h-[80px] border-2 mx-5 sm:mx-6'>
              <div className=''>
                  <div className='flex justify-center'>
                    <img src="https://staticecp.uprinting.com/6761/Sheet.svg" className='w-[30px]' />
                  </div>
                  <h2 className='text-sm text-c'>Shet</h2>
                </div>
              </div>
              <div className='w-[90px] flex justify-center items-center h-[80px] border-2'>
              <div className=''>
                  <div className='flex justify-center'>
                    <img src="https://staticecp.uprinting.com/6755/Kiss%20Cut.svg" className='w-[30px]' />
                  </div>
                  <h2 className='text-sm text-c'>Kiss-Cut</h2>
                </div>
              </div>
            </div>
            <div className='mt-8 mx-8 flex justify-center'>

              <div className=''>
                <div className='w-[420px] h-[60px] flex
              border-2 justify-between items-center px-5'>
                <div className='w-[40%] h-[90%] mt-2'>
                  <p className='text-xs'>SHAPE:</p>
                  <h2 className='font-bold'>Square/Rectangle</h2>
                </div>
                <div className='w-[40%] flex justify-end items-center h-[90%]'>
                  <FaArrowCircleDown />
                </div>
              </div>
              <div className='w-[420px] mt-5 h-[60px] flex
              border-2 justify-between items-center px-5'>
                <div className='w-[40%] h-[90%] mt-2'>
                  <p className='text-xs'>SHAPE:</p>
                  <h2 className='font-bold'>Square/Rectangle</h2>
                </div>
                <div className='w-[40%] flex justify-end items-center h-[90%]'>
                  <FaArrowCircleDown />
                </div>
              </div>
              <div className='w-[420px] mt-5 h-[60px] flex
              border-2 justify-between items-center px-5'>
                <div className='w-[40%] h-[90%] mt-2'>
                  <p className='text-xs'>SIZE:</p>
                  <h2 className='font-bold'>2 X 2</h2>
                </div>
                <div className='w-[40%] flex justify-end items-center h-[90%]'>
                  <FaArrowCircleDown />
                </div>
              </div>
              <div className='w-[420px] mt-5 h-[60px] flex
              border-2 justify-between items-center px-5'>
                <div className='w-[40%] h-[90%] mt-2'>
                  <p className='text-xs'>MATERIAL:</p>
                  <h2 className='font-bold'>Square/Rectangle</h2>
                </div>
                <div className='w-[40%] flex justify-end items-center h-[90%]'>
                  <FaArrowCircleDown />
                </div>
              </div>
              <div className='w-[420px] mt-5 h-[60px] flex
              border-2 justify-between items-center px-5'>
                <div className='w-[40%] h-[90%] mt-2'>
                  <p className='text-xs'>ROUNDED CORNERS:</p>
                  <h2 className='font-bold'>Square/Rectangle</h2>
                </div>
                <div className='w-[40%] flex justify-end items-center h-[90%]'>
                  <FaArrowCircleDown />
                </div>
              </div>
              <div className='w-[420px] mt-5 h-[60px] flex
              border-2 justify-between items-center px-5'>
                <div className='w-[40%] h-[90%] mt-2'>
                  <p className='text-xs'>BUNDLING:</p>
                  <h2 className='font-bold'>Square/Rectangle</h2>
                </div>
                <div className='w-[40%] flex justify-end items-center h-[90%]'>
                  <FaArrowCircleDown />
                </div>
              </div>
              <div className='w-[420px] mt-5 h-[60px] flex
              border-2 justify-between items-center px-5'>
                <div className='w-[40%] h-[90%] mt-2'>
                  <p className='text-xs'>QUANTITY:</p>
                  <h2 className='font-bold'>Square/Rectangle</h2>
                </div>
                <div className='w-[40%] flex justify-end items-center h-[90%]'>
                  <FaArrowCircleDown />
                </div>
              </div>
              <div className='w-[420px] mt-5 h-[60px] flex
              border-2 justify-between items-center px-5'>
                <div className='w-[40%] h-[90%] mt-2'>
                  <p className='text-xs'>PRINTING TIME:</p>
                  <h2 className='font-bold'>Square/Rectangle</h2>
                </div>
                <div className='w-[40%] flex justify-end items-center h-[90%]'>
                  <FaArrowCircleDown />
                </div>
              </div>
              
              </div>
              
            </div>
            {/* lllll */}

            <div className='flex justify-between lg:w-[420px] items-center mx-14 mt-5'>
              <div>
                <h2 className='text-xl'>Printing Cost:</h2>
              </div>
              <div className>
                <div className=' flex  justify-end text-xl font-bold text-green-700'>${"42.90"}</div>
                <div>(${'0.04 for each'})</div>
              </div>
            </div>

            <div className='flex justify-center my-9'>
              <a href='/product/edit&addtocardorbuy/1234' className='w-[95%] lg:w-[420px] h-[70px] bg-[#008024] flex justify-center items-center text-xl font-bold text-white'>
                Edit & Buy
              </a>
            </div>
          </div>


          <div className='p-8 w-full lg:mb-[440px]'>
            <h1 className='text-2xl font-bold lg:hidden'>Features</h1>
            <p className='text-xs mt-2 mb-3'>New lower prices on our most popular roll stickers!</p>
            <ul style={{listStyle:'curcel'}} className='pl-4'>
              <li>Single, roll, sheet & kiss-cut</li>
              <li>Print in traditional & custom shapes </li>
              <li>Bend and peel backing on singles</li>
              <li>Waterproof & writable materials available </li>
            </ul>
          </div>




          <div className='mt-3 border-t-2 lg:px-[220px] px-8 py-5'>
            <div className='text-black text-xl font-bold cursor-pointer hover:text-gray-400 border--2 mb-5'>Rerview's</div>
            <div className='border-2  w-full h-[450px] overflow-auto'>

              {/* review's */}
              <div className='w-full border-y-2 mb-2 bg-[#a2abb451]'>
                <div className='flex items-center'>
                  <img src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/341765031_953652662306684_1914603144356339145_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHOo-IlyL3sFxZbZAu9E_DGyW6C3agn34bJboLdqCffqeEFamp2-xGiSSQq44YSUOCmriiAfjXMDDwgJvlPvq1&_nc_ohc=24XsstB5Ow4Ab4x-ARa&_nc_ht=scontent.fzyl2-2.fna&oh=00_AfCXwo6BPYZ3MhlcQVANB2rwiJ6GYAz0TJjzaEw7AJQ4yA&oe=6616EB59" className='rounded-[90%] w-[60px] h-[60px] m-3' />
                  
                  <div className='text-yellow-400 ml-7 text-[26px] font-[670] font-serif lg:text-[22.2px]'>
                      {
                        item.reating == 1? 
                        <div>
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div> : <></> 
                              && 
                      item.reating == 2 ? 
                        <div>
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div>  : <></>
                                &&
                      item.reating == 3 ?
                      <div>
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div>  : <></>
                        &&
                        item.reating == 4 ?
                        <div>
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9734;</span> 
                          </div>  : <></>
                        &&
                        item.reating == 5 ?
                        <div>
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                          </div>  : <></>
                      }
                  </div>

                  <p className='text-[22px] font-serif ml-[20px]'>{item.reating} <span className='font-light text-sm text-[gray]'>Star Reating</span></p>
                </div>
                <div className='px-4 my-2'>
                  <li className='text-sm text-[#605f5fe2]'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt similique a quo mollitia, at nihil excepturi deleniti quaerat sint.</li>
                </div>
              </div>
              <div className='w-full border-y-2 mb-2'>
                <div className='flex items-center'>
                  <img src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/341765031_953652662306684_1914603144356339145_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHOo-IlyL3sFxZbZAu9E_DGyW6C3agn34bJboLdqCffqeEFamp2-xGiSSQq44YSUOCmriiAfjXMDDwgJvlPvq1&_nc_ohc=24XsstB5Ow4Ab4x-ARa&_nc_ht=scontent.fzyl2-2.fna&oh=00_AfCXwo6BPYZ3MhlcQVANB2rwiJ6GYAz0TJjzaEw7AJQ4yA&oe=6616EB59" className='rounded-[90%] w-[60px] h-[60px] m-3' />
                  
                  <div className='text-yellow-400 ml-7 text-[26px] font-[670] font-serif lg:text-[22.2px]'>
                      {
                        item.reating == 1? 
                        <div>
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div> : <></> 
                              && 
                      item.reating == 2 ? 
                        <div>
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div>  : <></>
                                &&
                      item.reating == 3 ?
                      <div>
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div>  : <></>
                        &&
                        item.reating == 4 ?
                        <div>
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9734;</span> 
                          </div>  : <></>
                        &&
                        item.reating == 5 ?
                        <div>
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                          </div>  : <></>
                      }
                  </div>

                  <p className='text-[22px] font-serif ml-[20px]'>{item.reating} <span className='font-light text-sm text-[gray]'>Star Reating</span></p>
                </div>
                <div className='px-4 my-2'>
                  <li className='text-sm text-[#605f5fe2]'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt similique a quo mollitia, at nihil excepturi deleniti quaerat sint.</li>
                </div>
              </div>
              <div className='w-full border-y-2 mb-2'>
                <div className='flex items-center'>
                  <img src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/341765031_953652662306684_1914603144356339145_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHOo-IlyL3sFxZbZAu9E_DGyW6C3agn34bJboLdqCffqeEFamp2-xGiSSQq44YSUOCmriiAfjXMDDwgJvlPvq1&_nc_ohc=24XsstB5Ow4Ab4x-ARa&_nc_ht=scontent.fzyl2-2.fna&oh=00_AfCXwo6BPYZ3MhlcQVANB2rwiJ6GYAz0TJjzaEw7AJQ4yA&oe=6616EB59" className='rounded-[90%] w-[60px] h-[60px] m-3' />
                  
                  <div className='text-yellow-400 ml-7 text-[26px] font-[670] font-serif lg:text-[22.2px]'>
                      {
                        item.reating == 1? 
                        <div>
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div> : <></> 
                              && 
                      item.reating == 2 ? 
                        <div>
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div>  : <></>
                                &&
                      item.reating == 3 ?
                      <div>
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div>  : <></>
                        &&
                        item.reating == 4 ?
                        <div>
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9734;</span> 
                          </div>  : <></>
                        &&
                        item.reating == 5 ?
                        <div>
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                          </div>  : <></>
                      }
                  </div>

                  <p className='text-[22px] font-serif ml-[20px]'>{item.reating} <span className='font-light text-sm text-[gray]'>Star Reating</span></p>
                </div>
                <div className='px-4 my-2'>
                  <li className='text-sm text-[#605f5fe2]'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt similique a quo mollitia, at nihil excepturi deleniti quaerat sint.</li>
                </div>
              </div>
              <div className='w-full border-y-2 mb-2'>
                <div className='flex items-center'>
                  <img src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/341765031_953652662306684_1914603144356339145_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHOo-IlyL3sFxZbZAu9E_DGyW6C3agn34bJboLdqCffqeEFamp2-xGiSSQq44YSUOCmriiAfjXMDDwgJvlPvq1&_nc_ohc=24XsstB5Ow4Ab4x-ARa&_nc_ht=scontent.fzyl2-2.fna&oh=00_AfCXwo6BPYZ3MhlcQVANB2rwiJ6GYAz0TJjzaEw7AJQ4yA&oe=6616EB59" className='rounded-[90%] w-[60px] h-[60px] m-3' />
                  
                  <div className='text-yellow-400 ml-7 text-[26px] font-[670] font-serif lg:text-[22.2px]'>
                      {
                        item.reating == 1? 
                        <div>
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div> : <></> 
                              && 
                      item.reating == 2 ? 
                        <div>
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div>  : <></>
                                &&
                      item.reating == 3 ?
                      <div>
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div>  : <></>
                        &&
                        item.reating == 4 ?
                        <div>
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9734;</span> 
                          </div>  : <></>
                        &&
                        item.reating == 5 ?
                        <div>
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                          </div>  : <></>
                      }
                  </div>

                  <p className='text-[22px] font-serif ml-[20px]'>{item.reating} <span className='font-light text-sm text-[gray]'>Star Reating</span></p>
                </div>
                <div className='px-4 my-2'>
                  <li className='text-sm text-[#605f5fe2]'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt similique a quo mollitia, at nihil excepturi deleniti quaerat sint.</li>
                </div>
              </div>
            </div>
          </div>

            {/* Quistion and answer's */}

          <div className='w-full h-[550px] bg-[#523c3c00] p-5'>
              <h1 className='text-[25px] font-[500] italic'>Question & Answers</h1>
              <div className='w-[full] border border-[#1c1d1d8e] h-[450px] mt-4 relative'>
                <div className='bg-[#2f2f3c21] w-full h-full overflow-auto'>
                      {/* Quistion and answer's */}
                      <div className='w-full bg-white mb-3'>
                        {/* buyer */}
                        <div className='w-[full] min-h-[40px] bg-blue-200 text-black'>
                          <p className='text-[23px] flex items-center p-2'>Q-:<span className='text-sm font-semibold pl-2'>{"How can i got this"} ?</span></p>
                        </div>
                        {/* seller */}
                        <div className='w-[full] min-h-[40px] bg-[#9e9ee054] text-black'>
                          <p className='text-[20px] flex items-center p-2'>A-:<span className='text-[14px] font-semibold pl-2'>{"Press order"}. <small className='p-3 italic font-light'>(seller)</small> </span></p>
                        </div>
                      </div>
                      <div className='w-full bg-white mb-3'>
                        {/* buyer */}
                        <div className='w-[full] min-h-[40px] bg-blue-200 text-black'>
                          <p className='text-[23px] flex items-center p-2'>Q-:<span className='text-sm font-semibold pl-2'>{"How can i got this"} ?</span></p>
                        </div>
                        {/* seller */}
                        <div className='w-[full] min-h-[40px] bg-[#9e9ee054] text-black'>
                          <p className='text-[20px] flex items-center p-2'>A-:<span className='text-[14px] font-semibold pl-2'>{"Press order"}. <small className='p-3 italic font-light'>(seller)</small> </span></p>
                        </div>
                      </div>
                      <div className='w-full bg-white mb-3'>
                        {/* buyer */}
                        <div className='w-[full] min-h-[40px] bg-blue-200 text-black'>
                          <p className='text-[23px] flex items-center p-2'>Q-:<span className='text-sm font-semibold pl-2'>{"How can i got this"} ?</span></p>
                        </div>
                        {/* seller */}
                        <div className='w-[full] min-h-[40px] bg-[#9e9ee054] text-black'>
                          <p className='text-[20px] flex items-center p-2'>A-:<span className='text-[14px] font-semibold pl-2'>{"Press order"}. <small className='p-3 italic font-light'>(seller)</small> </span></p>
                        </div>
                      </div>
                      <div className='w-full bg-white mb-3'>
                        {/* buyer */}
                        <div className='w-[full] min-h-[40px] bg-blue-200 text-black'>
                          <p className='text-[23px] flex items-center p-2'>Q-:<span className='text-sm font-semibold pl-2'>{"How can i got this"} ?</span></p>
                        </div>
                        {/* seller */}
                        <div className='w-[full] min-h-[40px] bg-[#9e9ee054] text-black'>
                          <p className='text-[20px] flex items-center p-2'>A-:<span className='text-[14px] font-semibold pl-2'>{"Press order"}. <small className='p-3 italic font-light'>(seller)</small> </span></p>
                        </div>
                      </div>
                      <div className='w-full bg-white mb-3'>
                        {/* buyer */}
                        <div className='w-[full] min-h-[40px] bg-blue-200 text-black'>
                          <p className='text-[23px] flex items-center p-2'>Q-:<span className='text-sm font-semibold pl-2'>{"How can i got this"} ?</span></p>
                        </div>
                        {/* seller */}
                        <div className='w-[full] min-h-[40px] bg-[#9e9ee054] text-black'>
                          <p className='text-[20px] flex items-center p-2'>A-:<span className='text-[14px] font-semibold pl-2'>{"Press order"}. <small className='p-3 italic font-light'>(seller)</small> </span></p>
                        </div>
                      </div>
                      <div className='p-3 w-full h-[30px]'></div>
                </div>
                <div className='absolute w-[100%] h-[40px] bottom-0 flex'>
                  <input type="text" placeholder='Write Quistion & Wait For Answer' className='h-full w-[100%] placeholder:text-[18px] px-3 bg-[#e4fae0] outline-none placeholder:text-[#6a7ec4]' value={quistonText} onChange={e=>setQuistonText(e.terget.value)} />
                  <div className='bg-[green] cursor-pointer flex justify-center items-center text-[31px] text-white h-full w-[65px]'>
                    <IoMdSend className='active:scale-105' />
                  </div>
                </div>
              </div>
          </div>

          <div className='mx-5 py-9 border-b-2'>
            <h1 className='text-xl font-bold mb-5 text-center'>Custom Stickers: Crafting Unique Messages</h1>
            <p className='text-sm text-center'>Are you an organization finding new ways to suit your members’ different personalities? Whether you’re a university with thousands of enrolled students, a fashion designer creating bespoke pieces for the hustling millennial, or an organic skincare provider delivering affordable luxury, custom stickers offer the freedom, space, and variety in a print marketing tool that caters to the busy and mindful individual. Find the right size, shape, and style you need to make a standout statement sticker that speaks volumes to your audience here on UPrinting.</p>
          </div>
          <div className='px-5 py-5'>
            <h1 className='text-xl px-5 text-center font-bold'>Styles and Sizes for All the Statements You Can Think Of</h1>
            <p className='text-xs my-3'>Our custom sticker options come in styles and sizes that match all kinds of personalities and uses: </p>
            <ul style={{listStyle:'circle'}} className='pl-5 text-sm'>
              <li className=''><span className='text-[#126CB5] font-semibold hover:text-[#008338]'>Singles </span>(formerly known as cut-to-size) stickers are single designs students or younger customers can add to their collages. 
                </li>
              <li className='my-3'><span className='text-[#126CB5] font-semibold hover:text-[#008338]'>Roll stickers </span> fit in most label dispensers for fast and easy application on bulk items. It’s a practical choice for the restaurant or e-commerce business owner who needs to identify their items.?  
              </li>
              <li className='my-3'><span className='text-[#126CB5] font-semibold hover:text-[#008338]'>Roll stickers </span> fit in most label dispensers for fast and easy application on bulk items. It’s a practical choice for the restaurant or e-commerce business owner who needs to identify their items.?  
              </li>
              <li className='my-3'><span className='text-[#126CB5] font-semibold hover:text-[#008338]'>Roll stickers </span> fit in most label dispensers for fast and easy application on bulk items. It’s a practical choice for the restaurant or e-commerce business owner who needs to identify their items.?  
              </li>
              <li className='my-3'><span className='text-[#126CB5] font-semibold hover:text-[#008338]'>Roll stickers </span> fit in most label dispensers for fast and easy application on bulk items. It’s a practical choice for the restaurant or e-commerce business owner who needs to identify their items.?  
              </li>
            </ul>
          </div>


          <div className='px-5 py-5 pb-[50px] border-b-2'>
            <h1 className='text-center text-xl font-bold my-4'>Personalize the Shape of Your Stickers</h1>
            <p className='text-sm text-center font-light'>Standard sticker shapes won't call attention if your customers have more dynamic or louder personalities. Design a statement or entirely new concept to their liking based on die-cut shape options like the hexagon, heart, or starburst.?  If they’re the types who want to stand out, then you can specify the exact dimensions of your sticker under the custom shape.</p>
            <h2 className='text-start my-3'>Get Started on Making Your Own Stickers</h2>
            <p className='text-sm font-light text-center'>Upload your logo or artwork, and we'll send you proof to show how we will cut around it—no need to worry about the decline. If you have yet to create the design, the Online Tool lets you edit text, add images, and preview the sticker before production. The printing time for custom shapes usually takes six (6) business days. </p>
          </div>

          <div className='p-2 ml-8 flex-wrap flex justify-center'>
            <div className='my-4'>
              <h1 className='text-xl font-semibold mx-3'>Browse by Category</h1>
              <ul style={{listStyle:'circle'}} className='ml-8'>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
              </ul>
            </div >
            <div className='my-4 md:mx-[10%]'>
              <h1 className='text-xl font-semibold mx-3'>Featured Products</h1>
              <ul style={{listStyle:'circle'}} className='ml-8'>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Realtor Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
              </ul>
            </div >
            <div className='my-4'>
              <h1 className='text-xl font-semibold mx-3'>Top Sellers</h1>
              <ul style={{listStyle:'circle'}} className='ml-8'>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
                <li><a href="" className='text-[#126CB5] hover:text-[#008338]'>Custom A Frame Signs</a></li>
              </ul>
            </div>
          </div>

          <div className='w-full bg-slate-100 py-6 my-9'>
            <h1 className='text-xl font-semibold pl-4  mb-[20px]'>Shop More Stickers</h1>
            <div className='flex justify-center'>
              <div className='w-[90%] h-[110px] bg-orange-200'></div>
            </div>
          </div>

        </div>
      </div>


      {/* <div className='fixed md:hidden flex w-full justify-between px-4 items-center h-[80px] bg-white shadow-2xl shadow-black bottom-0'>
        <div>
          <p>Printing Cost:</p>
          <h1 className='text-[#008338] text-3xl font-semibold'>${"43.90"}</h1>
        </div>
        <div>
          <a href="">
            <div className='text-xl flex justify-center items-center font-bold text-white w-[200px] h-[50px] hover:bg-[#1b9650] bg-[#008338] '>ORDER NOW</div>
          </a>
        </div>
      </div> */}


    </div>
  )
}

export default ProductCart