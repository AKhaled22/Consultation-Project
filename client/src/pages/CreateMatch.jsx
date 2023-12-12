import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import Sidebar from "../components/SideBar";
import SidebarData from '../assets/Data/ManagerSideBarData';

const CreateMatch = () => {

    const inputArr = [
        {
            type: "dropdown",
            label: "Home Team",
            placeholder: "Al Ahly",
            name: "HomeTeam",
            optionsArr: [
                "Al Ahly",
                "Al-Ittihad",
                "Al Masry",
                "Al Mokawloon",
                "Ceramica Cleopatra",
                "El Gouna",
                "El-Sharkeyah+",
                "ENPPI",
                "Future FC+",
                "Ghazl El Mahalla",
                "Ismaily",
                "Misr El Makkasa",
                "National Bank",
                "Pharco FC+",
                "Pyramids FC",
                "Smouha",
                "El Geish",
                "Zamalek" 
            ]
        },
        {
            type: "dropdown",
            label: "Away Team",
            placeholder: "Zamalek",
            name: "AwayTeam",
            optionsArr: [
                 "Al Ahly",
                "Al-Ittihad",
                "Al Masry",
                "Al Mokawloon",
                "Ceramica Cleopatra",
                "El Gouna",
                "El-Sharkeyah+",
                "ENPPI",
                "Future FC+",
                "Ghazl El Mahalla",
                "Ismaily",
                "Misr El Makkasa",
                "National Bank",
                "Pharco FC+",
                "Pyramids FC",
                "Smouha",
                "El Geish",
                "Zamalek" ]
            
        },
        {
            type: "dropdown",
            label: "Match Venue",
            placeholder: "Egyptian Army Stadium",
            name: "MatchVenue",
            optionsArr: [
                "New Administrative Capital Stadium",
                "Borg el-Arab Stadium",
                "Cairo International Stadium",
                "Egyptian Army Stadium",
                "Arab Contractors Stadium",
                "30 June Stadium",
                "Al-Salam Stadium",
                "Beni Ebeid Stadium",
                "Ghazl el-Mahalla Stadium",
                "Cairo Military Academy Stadium",
                "Suez Stadium",
                "El-Sekka el-Hadid Stadium",
                "Mokhtar el-Tetsh Stadium",
                "Petro Sport Stadium",
                "Ismailia Stadium",
                "Haras el-Hodoud Stadium",
                "Port Said Stadium",
                "Suez Canal Stadium",
                "Alexandria Stadium",
                "Fayoum Stadium",
                "Sohag Stadium",
                "El Mansoura Stadium",
                "Aluminium Stadium",
                "Izz al-Din Yacoub Stadium",
                "Asiut University Stadium",
                "Aswan Stadium",
                "Bani Sweif Stadium",
                "Desouk Stadium",
                "El-Gouna Stadium",
                "Arbaeen Sporting Stadium"]
            
        },
        {
            type: "date",
            label: "Date",
            placeholder: "",
            name: "date"
        },
        {
            type: "time",
            label: "Time",
            placeholder: "",
            name: "time"
        },
        {
            type: "dropdown",
            label: "Main Referee",
            placeholder: "Mohamed Adel",
            name: "MainReferee",
            optionsArr: [
                "Mohamed Adel",
                "Mahmoud El Banna",
                "Mohamed El Hanafy",
                "Mohamed Maarouf",
                "Amin Omar",
                "Mahmoud Ashour",
                "Nader Qamar",
                "Ibrahim Nour El Din",
                "Ahmed Ghandour",
                "Mohamed El Sabahi",
                "Abdelaziz El Sayed"
            ]
        },
        {
            type: "dropdown",
            label: "Linesman 1",
            placeholder: "",
            name: "Linesman1",
            optionsArr: [
                "Mohamed Adel",
                "Mahmoud El Banna",
                "Mohamed El Hanafy",
                "Mohamed Maarouf",
                "Amin Omar",
                "Mahmoud Ashour",
                "Nader Qamar",
                "Ibrahim Nour El Din",
                "Ahmed Ghandour",
                "Mohamed El Sabahi",
                "Abdelaziz El Sayed"
            ]
        },
        {
            type: "dropdown",
            label: "Linesman 2",
            placeholder: "",
            name: "Linesman2",
            optionsArr: [
                "Mohamed Adel",
                "Mahmoud El Banna",
                "Mohamed El Hanafy",
                "Mohamed Maarouf",
                "Amin Omar",
                "Mahmoud Ashour",
                "Nader Qamar",
                "Ibrahim Nour El Din",
                "Ahmed Ghandour",
                "Mohamed El Sabahi",
                "Abdelaziz El Sayed"
            ]
        }
    ]
    return (
        <div>
            <Sidebar SidebarData={SidebarData}/>
            <Header />
            <Form inputArr={inputArr} title="Create Match" buttText="Create Match" />
        </div>
    )
}

export default CreateMatch;