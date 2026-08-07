"use client";

import { useState } from "react";
import { useRadio } from "@/components/RadioProvider";


type StationResult = {
  id: string;
  name: string;
  logo: string;
  streamUrl: string;
  homepage: string;
  genre: string;
  country?: string;
};


export default function RadioSearch() {

  const { playStation } = useRadio();


  const [query, setQuery] = useState("");

  const [stations, setStations] = useState<StationResult[]>([]);

  const [loading, setLoading] = useState(false);



  async function searchStations() {

    if (!query.trim()) {

      setStations([]);

      return;

    }


    setLoading(true);


    try {

      const response = await fetch(
        `/api/radio-search?q=${encodeURIComponent(query)}`
      );


      const data = await response.json();


      setStations(data);


    } catch(error){

      console.error(
        "Search error:",
        error
      );

      setStations([]);


    } finally {

      setLoading(false);

    }

  }




  function handlePlay(station: StationResult) {


    playStation({

      id: station.id,

      name: station.name,

      logo: station.logo,

      streamUrl: station.streamUrl,

      homepage: station.homepage,

      genre: station.genre,

      codec: "MP3",

    });


  }




  return (

    <section className="w-full">


      <div
        className="
        flex
        gap-3
        rounded-full
        bg-white
        border
        px-5
        py-3
        "
      >


        <input

          value={query}


          onChange={(e)=>{

            const value = e.target.value;

            setQuery(value);


            // Remove old results immediately when search is cleared
            if(value.trim() === ""){

              setStations([]);

            }


            // Remove results for very short searches
            if(value.trim().length < 2){

              setStations([]);

            }

          }}


          onKeyDown={(e)=>{

            if(e.key === "Enter"){

              searchStations();

            }

          }}


          placeholder="Search any radio station..."


          className="
          flex-1
          outline-none
          text-sm
          "

        />



        <button

          onClick={searchStations}


          className="
          bg-[#7b2637]
          text-white
          rounded-full
          px-6
          py-2
          "

        >

          Search

        </button>


      </div>




      {
        loading && (

          <p className="mt-4 text-gray-500">

            Searching...

          </p>

        )

      }




      <div

        className="
        mt-6
        grid
        md:grid-cols-2
        gap-4
        "

      >


        {

          stations.map((station)=>(


            <button


              key={station.id}


              onClick={() => handlePlay(station)}


              className="
              flex
              items-center
              gap-4
              rounded-2xl
              bg-[#f7efeb]
              p-4
              text-left
              hover:shadow-md
              transition
              "


            >


              <img


                src={
                  station.logo ||
                  "/default-radio.png"
                }


                alt={station.name}


                className="
                h-12
                w-12
                rounded-full
                object-cover
                "


                onError={(e)=>{

                  e.currentTarget.src =
                  "/default-radio.png";

                }}


              />



              <div>


                <h3

                  className="
                  font-semibold
                  text-[#7b2637]
                  "

                >

                  {station.name}

                </h3>



                <p

                  className="
                  text-xs
                  text-gray-500
                  "

                >

                  {station.genre}
                  {" • "}
                  {station.country || "Unknown"}

                </p>



              </div>


            </button>


          ))

        }


      </div>


    </section>

  );

}