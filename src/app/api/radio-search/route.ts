import { NextRequest, NextResponse } from "next/server";

type RadioBrowserStation = {
  stationuuid?: string;
  name?: string;
  favicon?: string;
  url?: string;
  url_resolved?: string;
  homepage?: string;
  tags?: string;
  country?: string;
};

export async function GET(
  request: NextRequest
) {

  const { searchParams } =
    new URL(request.url);


  const query =
    searchParams.get("q");


  if (!query) {

    return NextResponse.json([]);

  }


  try {


    const response = await fetch(
      `https://de1.api.radio-browser.info/json/stations/search?name=${encodeURIComponent(query)}&limit=20&hidebroken=true`,
      {
        headers:{
          "User-Agent":"NoRadio/1.0"
        },

        cache:"no-store"

      }
    );


    if(!response.ok){

      throw new Error(
        "Radio API failed"
      );

    }


    const stations = (await response.json()) as RadioBrowserStation[];



    const formatted =
      stations.map(
        (station) => ({

          id:
          station.stationuuid,


          name:
          station.name || "Unnamed station",


          logo:
          station.favicon ||
          "/default-radio.png",


          streamUrl:
          station.url_resolved ||
          station.url,


          homepage:
          station.homepage || "",


          genre:
          station.tags ||
          "Radio",


          country:
          station.country ||
          "Unknown"

        })
      );


    return NextResponse.json(
      formatted
    );


  } catch(error){


    console.error(
      error
    );


    return NextResponse.json(
      [],
      {
        status:500
      }
    );


  }

}
