import React from 'react'
export const data = [
    {
        "name": "Example Video 1",
        "status": "Active",
        "category": "Ed",
        "views": 10000,
        "likes": 500
    },
    {
        "name": "Example Video 2",
        "status": "Inactive",
        "category": "Politics",
        "views": 5000,
        "likes": 300
    },
    {
        "name": "Example Video 3",
        "status": "Active",
        "category": "Sports",
        "views": 20000,
        "likes": 1000
    },
    {
        "name": "Example Video 1",
        "status": "Active",
        "category": "Ed",
        "views": 10000,
        "likes": 500
    },
    {
        "name": "Example Video 2",
        "status": "Inactive",
        "category": "Politics",
        "views": 5000,
        "likes": 300
    },
    {
        "name": "Example Video 3",
        "status": "Active",
        "category": "Sports",
        "views": 20000,
        "likes": 1000
    },
    {
        "name": "Example Video 1",
        "status": "Active",
        "category": "Ed",
        "views": 10000,
        "likes": 500
    },
    {
        "name": "Example Video 2",
        "status": "Inactive",
        "category": "Politics",
        "views": 5000,
        "likes": 300
    },
    {
        "name": "Example Video 3",
        "status": "Active",
        "category": "Sports",
        "views": 20000,
        "likes": 1000
    },
    {
        "name": "Example Video 1",
        "status": "Active",
        "category": "Ed",
        "views": 10000,
        "likes": 500
    },
    {
        "name": "Example Video 2",
        "status": "Inactive",
        "category": "Politics",
        "views": 5000,
        "likes": 300
    },
    {
        "name": "Example Video 3",
        "status": "Active",
        "category": "Sports",
        "views": 20000,
        "likes": 1000
    },
]

const DashHome = () => {
    return (
        <div className='flex flex-col gap-6 px-2 py-4 md:p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-white p-6 rounded-md flex flex-col gap-4 items-start  justify-around'>
                    <div className='flex gap-4 justify-between px-4 w-full'>
                        <p className='text-sm md:text-lg'>Revenue</p>
                        <div className='flex gap-4'>
                            <div className='flex gap-4 justify-center items-center'>
                                <div className='bg-green-500 rounded-md h-4 w-4' />
                                <p className='text-sm md:text-lg'>Total Earn</p>
                            </div>
                            <div className='flex gap-4 justify-center items-center'>
                                <div className='bg-orange-500 rounded-md h-4 w-4' />
                                <p className='text-sm md:text-lg'>Total Views</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full overflow-hidden'>
                        <svg width="430" height="158" viewBox="0 0 430 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.3638 10.6639C21.0541 10.659 20.7445 10.6001 20.4348 10.487C20.1252 10.374 19.8425 10.1835 19.587 9.91562C19.3314 9.64529 19.1262 9.28034 18.9713 8.82077C18.8165 8.35875 18.7391 7.77877 18.7391 7.08082C18.7391 6.41236 18.8018 5.82008 18.9271 5.304C19.0524 4.78545 19.2343 4.34923 19.4727 3.99534C19.7111 3.639 19.9986 3.36866 20.3353 3.18434C20.6744 3.00003 21.0566 2.90787 21.4817 2.90787C21.9044 2.90787 22.2804 2.99265 22.6098 3.16223C22.9415 3.32934 23.2119 3.56281 23.4208 3.86263C23.6296 4.16246 23.7648 4.50774 23.8263 4.8985H22.9268C22.8432 4.55935 22.681 4.27796 22.4402 4.05432C22.1993 3.83069 21.8799 3.71887 21.4817 3.71887C20.8968 3.71887 20.436 3.97322 20.0994 4.48194C19.7651 4.99066 19.5968 5.70458 19.5943 6.62371H19.6533C19.7909 6.41482 19.9544 6.23664 20.1436 6.08919C20.3353 5.93928 20.5466 5.82377 20.7776 5.74267C21.0087 5.66157 21.2532 5.62102 21.5112 5.62102C21.9438 5.62102 22.3394 5.72915 22.6982 5.94542C23.057 6.15923 23.3446 6.45537 23.5608 6.83383C23.7771 7.20984 23.8852 7.64114 23.8852 8.12774C23.8852 8.59468 23.7808 9.02229 23.5719 9.41059C23.363 9.79643 23.0693 10.1036 22.6909 10.3322C22.3148 10.5583 21.8725 10.6689 21.3638 10.6639ZM21.3638 9.85295C21.6734 9.85295 21.9511 9.77554 22.1969 9.62071C22.4451 9.46588 22.6405 9.25822 22.783 8.99772C22.928 8.73722 23.0005 8.44722 23.0005 8.12774C23.0005 7.81563 22.9305 7.53178 22.7904 7.27619C22.6528 7.01815 22.4623 6.81294 22.219 6.66057C21.9782 6.5082 21.7029 6.43202 21.3933 6.43202C21.1598 6.43202 20.9423 6.47871 20.7408 6.5721C20.5393 6.66303 20.3623 6.78837 20.2099 6.94811C20.06 7.10785 19.9421 7.29094 19.8561 7.49737C19.77 7.70135 19.727 7.91639 19.727 8.14248C19.727 8.44231 19.7971 8.72247 19.9372 8.98297C20.0797 9.24347 20.2738 9.4536 20.5196 9.61334C20.7678 9.77308 21.0492 9.85295 21.3638 9.85295ZM26.1606 8.49637L26.1459 7.41996H26.3228L28.8001 4.8985H29.8765L27.237 7.56741H27.1633L26.1606 8.49637ZM25.3496 10.5607V3.01109H26.2196V10.5607H25.3496ZM28.9475 10.5607L26.7357 7.7591L27.355 7.15454L30.0534 10.5607H28.9475Z" fill="black" />
                            <path d="M50.3633 5.37611L398.194 8.74533" stroke="#ECEDEF" />
                            <path d="M18.4976 57.0125V56.2604L21.8153 51.0111H22.3609V52.176H21.9923L19.4856 56.1425V56.2015H23.9534V57.0125H18.4976ZM22.0513 58.5607V56.7839V56.4337V51.0111H22.9213V58.5607H22.0513ZM26.1606 56.4964L26.1459 55.42H26.3228L28.8001 52.8985H29.8765L27.237 55.5674H27.1633L26.1606 56.4964ZM25.3496 58.5607V51.0111H26.2196V58.5607H25.3496ZM28.9475 58.5607L26.7357 55.7591L27.355 55.1545L30.0534 58.5607H28.9475Z" fill="black" />
                            <path d="M50.3612 54.5822L398.2 55.5393" stroke="#ECEDEF" />
                            <path d="M19.0497 106.561V105.897L21.5416 103.169C21.8341 102.85 22.0749 102.572 22.2642 102.336C22.4534 102.098 22.5935 101.874 22.6844 101.665C22.7778 101.454 22.8245 101.233 22.8245 101.002C22.8245 100.736 22.7606 100.507 22.6328 100.312C22.5075 100.118 22.3354 99.9683 22.1167 99.8626C21.898 99.757 21.6522 99.7041 21.3794 99.7041C21.0894 99.7041 20.8363 99.7643 20.6201 99.8848C20.4062 100.003 20.2404 100.169 20.1224 100.382C20.0069 100.596 19.9491 100.847 19.9491 101.134H19.0792C19.0792 100.692 19.1811 100.304 19.3851 99.9695C19.5891 99.6353 19.8668 99.3748 20.2182 99.188C20.5721 99.0013 20.969 98.9079 21.4089 98.9079C21.8513 98.9079 22.2433 99.0013 22.5849 99.188C22.9265 99.3748 23.1944 99.6267 23.3885 99.9437C23.5826 100.261 23.6797 100.613 23.6797 101.002C23.6797 101.279 23.6293 101.551 23.5286 101.816C23.4303 102.079 23.2582 102.373 23.0125 102.697C22.7692 103.019 22.4313 103.413 21.9987 103.877L20.303 105.691V105.75H23.8124V106.561H19.0497ZM26.1606 104.496L26.1459 103.42H26.3228L28.8001 100.898H29.8765L27.237 103.567H27.1633L26.1606 104.496ZM25.3496 106.561V99.0111H26.2196V106.561H25.3496ZM28.9475 106.561L26.7357 103.759L27.355 103.155L30.0534 106.561H28.9475Z" fill="black" />
                            <path d="M50.361 102.639L398.2 103.483" stroke="#ECEDEF" />
                            <path d="M21.3094 154.664C20.754 154.664 20.2809 154.513 19.8902 154.211C19.4994 153.906 19.2008 153.465 18.9944 152.887C18.7879 152.307 18.6847 151.607 18.6847 150.786C18.6847 149.97 18.7879 149.273 18.9944 148.696C19.2033 148.116 19.5031 147.673 19.8938 147.369C20.2871 147.061 20.7589 146.908 21.3094 146.908C21.8599 146.908 22.3305 147.061 22.7213 147.369C23.1145 147.673 23.4143 148.116 23.6207 148.696C23.8296 149.273 23.9341 149.97 23.9341 150.786C23.9341 151.607 23.8309 152.307 23.6244 152.887C23.418 153.465 23.1194 153.906 22.7286 154.211C22.3379 154.513 21.8648 154.664 21.3094 154.664ZM21.3094 153.853C21.8599 153.853 22.2875 153.588 22.5922 153.057C22.897 152.526 23.0494 151.769 23.0494 150.786C23.0494 150.132 22.9793 149.576 22.8392 149.116C22.7016 148.656 22.5025 148.306 22.242 148.065C21.984 147.825 21.6731 147.704 21.3094 147.704C20.7638 147.704 20.3374 147.973 20.0302 148.511C19.723 149.047 19.5694 149.805 19.5694 150.786C19.5694 151.44 19.6383 151.995 19.7759 152.452C19.9135 152.909 20.1113 153.257 20.3694 153.495C20.6299 153.734 20.9432 153.853 21.3094 153.853ZM26.1606 152.496L26.1459 151.42H26.3228L28.8001 148.898H29.8765L27.237 151.567H27.1633L26.1606 152.496ZM25.3496 154.561V147.011H26.2196V154.561H25.3496ZM28.9475 154.561L26.7357 151.759L27.355 151.155L30.0534 154.561H28.9475Z" fill="black" />
                            <path d="M50.361 150.639L398.2 151.483" stroke="#ECEDEF" />
                            <path d="M64.2 120.561L118.2 75.5607L171.7 84.5607L227.2 29.0607L279.7 89.5607L329.2 95.0607L377.7 112.561" stroke="#8AC389" />
                            <circle cx="63.7" cy="120.561" r="2.5" fill="#FE5E37" />
                            <circle cx="117.7" cy="75.5607" r="2.5" fill="#8AC389" />
                            <circle cx="63.7" cy="120.561" r="2.5" fill="#8AC389" />
                            <circle cx="279.7" cy="89.5607" r="2.5" fill="#8AC389" />
                            <circle cx="329.7" cy="95.5607" r="2.5" fill="#8AC389" />
                            <circle cx="377.7" cy="112.561" r="2.5" fill="#8AC389" />
                            <circle cx="226.7" cy="29.5607" r="2.5" fill="#8AC389" />
                            <circle cx="170.7" cy="84.5607" r="2.5" fill="#8AC389" />
                            <path d="M63.2 97.0607L118.7 109.561L170.7 37.5607L226.2 75.0607L278.7 38.5607L328.2 72.5607L377.2 52.5607" stroke="#FE5E37" />
                            <circle cx="63.7" cy="96.5607" r="2.5" fill="#FE5E37" />
                            <circle cx="170.7" cy="38.5607" r="2.5" fill="#FE5E37" />
                            <circle cx="225.7" cy="74.5607" r="2.5" fill="#FE5E37" />
                            <circle cx="278.7" cy="38.5607" r="2.5" fill="#FE5E37" />
                            <circle cx="328.7" cy="72.5607" r="2.5" fill="#FE5E37" />
                            <circle cx="377.7" cy="52.5607" r="2.5" fill="#FE5E37" />
                            <circle cx="63.7" cy="96.5607" r="2.5" fill="#FE5E37" />
                            <circle cx="117.7" cy="109.561" r="2.5" fill="#FE5E37" />
                        </svg>

                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='p-8 bg-white rounded-md flex flex-col text-black justify-around items-start'>
                        <div className='flex justify-between w-full'>
                            <p className='text-sm md:text-lg'>Total Likes</p>
                            <i className="fi fi-rr-book-alt text-white text-3xl bg-black/30 flex items-center justify-center p-2 rounded-md"></i>
                        </div>
                        <p className='text-lg md:text-2xl font-medium'>
                            5,000
                        </p>

                    </div>
                    <div className='p-8 bg-red rounded-md flex flex-col text-white justify-around items-start'>
                        <div className='flex justify-between w-full'>
                            <p className='text-sm md:text-lg'>Total Views</p>
                            <i className="fi fi-rr-book-alt text-white text-3xl bg-white/30 flex items-center justify-center p-2 rounded-md"></i>
                        </div>
                        <p className='text-lg md:text-2xl font-medium'>
                            12,000
                        </p>

                    </div>
                    <div className='p-8 bg-red rounded-md flex flex-col text-white justify-around items-start'>
                        <div className='flex justify-between w-full'>
                            <p className='text-sm md:text-lg'>Total Saves</p>
                            <i className="fi fi-rr-book-alt text-white text-3xl bg-white/30 flex items-center justify-center p-2 rounded-md"></i>
                        </div>
                        <p className='text-lg md:text-2xl font-medium'>
                            1,200
                        </p>

                    </div>
                    <div className='p-8 bg-white rounded-md flex flex-col text-black justify-around items-start'>
                        <div className='flex justify-between w-full'>
                            <p className='text-sm md:text-lg'>Total Shares</p>
                            <i className="fi fi-rr-book-alt text-white text-3xl bg-black/30 flex items-center justify-center p-2 rounded-md"></i>
                        </div>
                        <p className='text-lg md:text-2xl font-medium'>
                            520
                        </p>

                    </div>
                </div>
            </div>
            <div className='bg-white w-full rounded-md flex flex-col gap-4 py-6 max-h-[80vh]'>
                <div className='w-full flex gap-4 justify-end px-6'>
                    <button className='p-2 px-4 rounded-md bg-black text-white'>add</button>
                    <button className='p-2 px-4 rounded-md bg-grey text-black'>delete</button>
                </div>
                <div className="relative  overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs sticky top-0 bg-white ">
                            <tr>
                                <th className="px-6 py-3">
                                    Name
                                </th>
                                <th className="px-6 py-3">
                                    Status
                                </th>
                                <th className="px-6 py-3">
                                    Category
                                </th>
                                <th className="px-6 py-3">
                                    Views
                                </th>
                                <th className="px-6 py-3">
                                    Likes
                                </th>
                            </tr>
                        </thead>
                        {
                            data.map((dat, i) => (

                                <ContentTable name={dat.name} category={dat.category} views={dat.views} likes={dat.likes} status={dat.status} key={i} />
                            ))
                        }

                    </table>
                </div>
            </div>
        </div>
    )
}

export default DashHome


export const ContentTable = ({ name, status, category, views, likes }) => {
    return (
        <>
            <tbody>
                <tr className="">
                    <th className="px-6 py-4 font-medium whitespace-nowrap">
                        {name}
                    </th>
                    <td className="px-6 py-4">
                        <select name="status" className='outline outline-1 rounded-md md:p-1' defaultValue={status} id="">
                            <option value="Active">
                                active
                            </option>
                            <option value="Inactive">
                                Inactive
                            </option>
                        </select>
                    </td>
                    <td className="px-6 py-4">
                        <select name="category" className='outline outline-1 rounded-md md:p-1' defaultValue={category} id="">
                            <option value="Politics">politics</option>
                            <option value="Ed">education</option>
                            <option value="Sports" >sports</option>
                        </select>
                    </td>
                    <td className="px-6 py-4">
                        {views}
                    </td>
                    <td className="px-6 py-4">
                        {likes}
                    </td>
                </tr>
            </tbody>
        </>

    )
}