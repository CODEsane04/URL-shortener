import { useState, useEffect} from "react";


const Linkss = () => {

    const[urls, setUrls] = useState([]);

   useEffect(() => {
        const geturls = async () => {
            try {
                const res = await fetch("http://localhost:8000/links");
                const data = await res.json();
                setUrls(data);
            } catch (err) {
                console.error("Error fetching URLs:", err);
            }
        };

        geturls();
  }, []); 
    
    return (
        <div className="url-list">
            {urls.length > 0 && urls.map((url)=>(
                <div className="single-url">
                    <p>short Url: <a href={url.shortUrl} target="_blank">{url.shortUrl}</a></p>
                    <p>Long Url: <a href={url.redirectUrl} target="_blank">{url.redirectUrl}</a></p>
                </div>
            ))}
        </div>
    );
}
 
export default Linkss;