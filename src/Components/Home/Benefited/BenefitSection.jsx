import { useEffect, useState } from "react";


const BenefitSection = () => {
    const [card , setCard] = useState([])
    useEffect(() => {
        fetch("/benefit.json")
        .then( res => res.json())
        .then( data => {
            setCard(data)
        })
    },[])
    console.log(card);
    return (
      <div className="py-10" >
        <h1 className="font-bold text-3xl ">Whom Benefited from this website ? </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 w-[95%] mx-auto ">
            {
                card?.map(item => <div key={item?.whom}>
                         <div  className="p-3 bg-white rounded mt-5 text-left h-80"   >
                                <div className=" px-2 py-3">
                                <h1 className="font-semibold text-center text-2xl"> {item?.whom}</h1>
                                </div>
                                <div className=" px-2">
                                <h1 className="font-medium"> {item?.title1} : <h1 className="font-normal">{item?.desc1}</h1></h1>
                                
                               
                                </div>
                                <div className=" px-2">
                                <h1 className="font-medium"> {item?.title2} : <h1 className="font-normal">{item?.desc2}</h1></h1>
                                
                               
                                </div>
                            </div>
                    </div>
                )
            }
        </div>
      </div>
    );
};

export default BenefitSection;