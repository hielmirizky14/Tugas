export default function pagebaru(){
    return(
        <section className="min-h-screen bg-grey-200 p-8 flex flex-col justify-center items-centergap-2">
            <div className="flex gap-2">
                <div className="bg-gray-100 p-8 h-100 w-90 rounded-3x1 flex flex col ">
                    <div className="flex gap-6 flex-row space-around">
                        <p className=" font-bold text-black">Client Details</p>
                        <img src="x.svg" alt="Client Details" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-3 flex-row">
                            <img src="TK8.jpg" width="40" height="40" alt="Client Details" />
                            <p className="text-1x1 font-bold text-black">Toni Kroos</p>
                        </div>
                        <div className="bg-green-300 p-2 h-10 w-20 rounded-2x1 flex flex-col justify-between">
                            <img src="award.svg" width="15" height="15" alt="award" />
                            <p className="font-bold text-black">Verifikasi</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}