export default function learnpage() {
    return (
        <section className="min-h-screen bg-gray-100 p-8 flex flex-col justify-center items-center gap-6">
            <div className="flex gap-6">
                <div className="bg-cyan-100 p-8 h-72 w-[588px] rounded-4xl flex flex-col justify-between text-teal-900">
                    <div className="flex gap-3">
                        <img src="palette.svg" alt="Design" />
                        <p>Design</p>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <h2 className="text-4xl font-bold">Adobe Photoshop</h2>
                            <p className="font-bold mt-2">in 3 days</p>
                        </div>
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-cyan-100"></div>
                            <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-cyan-100"></div>
                            <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-cyan-100"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-green-100 p-8 h-72 w-[588px] rounded-4xl flex flex-col justify-between text-green-900">
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <img src="terminal.svg" alt="terminal" />
                            <p>AI</p>
                        </div>
                        <img src="/star.svg" alt="Star" className="w-6 h-6" />
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <h2 className="text-4xl font-bold leading-tight">DALL·E 2, Midjourney,<br/>Stable Diffusion</h2>
                            <p className="font-bold mt-2">in 5 days</p>
                        </div>
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-green-100"></div>
                            <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-green-100"></div>
                            <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-green-100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="bg-purple-300 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
                    <div className="flex gap-3">
                        <img src="palette.svg" alt="Palette" />
                        <p>Design</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">Figma</h2>
                        <p className="font-bold">8 Hours Ago</p>
                    </div>
                </div>
                <div className="bg-orange-300 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
                    <div className="flex gap-3">
                        <img src="code.svg" alt="code" />
                        <p>Codding</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">Python</h2>
                        <p className="font-bold">2 Days Ago</p>
                    </div>
                </div>
                <div className="bg-red-300 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
                    <div className="flex gap-3">
                        <img src="palette.svg" alt="Palette" />
                        <p>Design</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">Sketch</h2>
                        <p className="font-bold">4 Days Ago</p>
                    </div>
                </div>
            </div>
        </section>
    )
} 