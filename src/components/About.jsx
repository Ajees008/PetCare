import './about.css';
import { AiFillRightCircle } from 'react-icons/ai';

export default function About() {
    return (
        <>
            <div style={{paddingBottom:'10px'}} className="lg:max-w-[1600px] lg:py-20 lg:px-16 flex flex-row mx-auto justify-center space-x-20">
                <div className="xs:hidden w-1/2 flex justify-end">
                    <img  style={{borderRadius:'10px'}} src="https://cdn.dribbble.com/users/1885976/screenshots/11305353/media/8db362f43c43a69417610162eb09d4eb.gif" alt="https://via.placeholder.com/250x250" />
                </div>
                <div className="flex flex-col text-left w-1/2 space-y-5">
                    <h1 className="text-5xl font-extrabold dark-blue-text">About Us</h1>
                    <p className="text-xl leading-8 font-medium" style={{ color: "#515151" }}>
                    Petnic is a new digital platform with real people behind the scenes. Our platform connects potential adopters with people who need to rehome their pets. </p>
                    <ul className="listIcon ml-5 font-semibold leading-8 text-lg py-3" style={{ color: "#515151" }}>
                        <li>Kind to Everyone</li>
                        <li>Professional</li>
                        <li>Compassionate Adoption service</li>
                    </ul>

                    <button style={{background:'black'}}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 pl-5 pr-2 rounded-full w-fit font-inter text-sm"
                        onClick={() => window.location.href = '/contact'}
                    >
                        Contact
                        <AiFillRightCircle className="inline-block ml-5 text-2xl text-white " />
                    </button>
                </div>
            </div>
        </>
    )
}