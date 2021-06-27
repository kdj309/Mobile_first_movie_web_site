import React,{useEffect,useState} from 'react'
import './Main.css'
import filmposter from './film-poster.jpg'
export default function Main() {
    let baseurl='https://image.tmdb.org/t/p/original/'
    const [value, setvalue] = useState()
    const [Title, setTitle] = useState('Interstellar')
    const [Year, setYear] = useState(2014)
    const [language, setLanguage] = useState('English')
    const [poster, setposter] = useState(filmposter)
    const [rating, setrating] = useState("9.1")
    const [trailer,settrailer] = useState('https://www.youtube.com/results?search_query=interstellar+official+trailer')
    const[description,setdescription]=useState(`In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole.`)
    useEffect(() => {
        
    }, [])
    async function fetchmovie() {
        console.log(value)
        let film=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eee6a0bb762e357c0fe2e8f12f7ad5f7&query=${value}`)
        let data=await film.json()
        console.log(data)
        console.log(data.results[0].title);
        console.log(data.results[0].release_date);
        console.log(data.results[0].poster_path);
        console.log(data.results[0].backdrop_path);
        console.log(data.results[0].overview);
        console.log(data.results[0].original_language);
        console.log(data.results[0].vote_average);
        const root = document.querySelector(":root");
        let backposter = `https://image.tmdb.org/t/p/w1280/${data.results[0].backdrop_path}`;
        root.style.setProperty("--pseudo-backgroundimage", `url(${backposter})`)
        setTitle(data.results[0].title)
        setYear(data.results[0].release_date)
        setposter(baseurl+data.results[0].poster_path)
        if (data.results[0].original_language==="kn") {
            data.results[0].original_language="Kannada"
            setLanguage(data.results[0].original_language)
           }else if(data.results[0].original_language==="en"){
            data.results[0].original_language="English"
            setLanguage(data.results[0].original_language)
           }
           else if(data.results[0].original_language==="hi"){
            data.results[0].original_language="Hindi"
            setLanguage(data.results[0].original_language)
           }
           else if(data.results[0].original_language==="ml"){
            data.results[0].original_language="Malayalam"
            setLanguage(data.results[0].original_language)
           }
           else if(data.results[0].original_language==="te"){
            data.results[0].original_language="Telugu"
            setLanguage(data.results[0].original_language)
           }
           else if(data.results[0].original_language==="ta"){
            data.results[0].original_language="Tamil"
            setLanguage(data.results[0].original_language)
           }
            else {
            data.results[0].original_language=data.results[0].original_language
            setLanguage(data.results[0].original_language)
           }
            setrating(data.results[0].vote_average)
            var yourString =data.results[0].overview //replace with your string.
            var maxLength = 223// maximum number of characters to extract

// //trim the string to the maximum length
           var trimmedString = yourString.substr(0, maxLength);
           setdescription(trimmedString)
           console.log(data.results[0].overview.length)
           settrailer(`https://www.youtube.com/results?search_query=${data.results[0].title}+official+trailer`)
           
    }
    return (
        <>
    <div className="main" id="problem">
        <input type="search" onChange={(e)=>{setvalue(e.target.value)}} value={value} style={{border: "none",padding: "0.5em 0.5em",width:"150px",height:"30px"}} placeholder="search by film Name" name="" id="inpt"/>
        <button type="button" className="btn btn-info" id="btn" onClick={fetchmovie}>search</button>
    </div>
    <div className="filmcontainer">
        <div>
            <div id="box">
            <div className="card">
                <img id="poster"  src={poster} alt="" />
            </div>
            <h6 id="title">Title: {Title}</h6>
            <h6 id="year">Year: {Year}</h6>
            </div>
        </div>
        <div>
            <div id="innercard">
                <h6 id="lan">Language: {language}</h6>
                <h6 id="plot">Description: {description}</h6>
                <h6 id="rating">Rating Votes: {rating}</h6>
                <h6>Trailer:<a id="trailer" href={trailer}>Trailer-link</a></h6>
            </div>
        </div>
    </div>
        </>
    )
}
