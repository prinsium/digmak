export default function Homepage(){
    return(
        <div className="bg-gray-200 pt-24 md:pt-16">
        <div className="flex flex-col mx-2 sm:mx-4 md:mx-12 lg:mx-24 p-8">
            <div className="flex flex-row justify-between items-center gap-12">
                <h1 className="whitespace-nowrap">Go beyond</h1>
                <p className="hidden lg:block text-gray-800">We as a leading outsourcing firm, putting every ounce of innovation, dedication and skill - we love to help you scale your business growdth</p>
            </div>

            <div className="flex justify-end">
                <h1>the ordinary</h1>
            </div>

            <div className="flex flex-row justify-between items-center gap-12">
                <p className="lg:hidden text-gray-800">We as a leading outsourcing firm, putting every ounce of innovation, dedication and skill - we love to help you scale your business growdth</p>
            </div>

        </div>
        </div>
    )
}