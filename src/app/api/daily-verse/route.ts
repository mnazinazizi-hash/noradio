import { NextResponse } from "next/server";

const encouragingReferences = [
  "Philippians 4:13",
  "Joshua 1:9",
  "Psalm 139:14",
  "Jeremiah 29:11",
  "Romans 8:28",
  "Isaiah 41:10",
  "Psalm 46:1",
  "Deuteronomy 31:8",
  "Proverbs 3:5-6",
  "Psalm 34:18",
  "Romans 15:13",
  "2 Timothy 1:7",
  "Psalm 23:1-3",
  "Lamentations 3:22-23",
  "Ephesians 2:10",
  "Psalm 27:1",
];

type BibleApiResponse = {
  reference?: string;
  text?: string;
  translation_name?: string;
};

function randomReference() {
  const values = new Uint32Array(1);
  crypto.getRandomValues(values);
  return encouragingReferences[values[0] % encouragingReferences.length];
}

export async function GET() {
  const reference = randomReference();

  try {
    const response = await fetch(
      `https://bible-api.com/${encodeURIComponent(reference)}?translation=web`,
      { cache: "no-store" },
    );

    if (!response.ok) throw new Error("Bible API request failed");

    const verse = (await response.json()) as BibleApiResponse;
    if (!verse.text || !verse.reference) throw new Error("Incomplete Bible API response");

    return NextResponse.json(
      {
        text: verse.text.replace(/\s+/g, " ").trim(),
        reference: verse.reference,
        translation: verse.translation_name || "World English Bible",
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      {
        text: "For I know the thoughts that I think toward you, says Yahweh, thoughts of peace, and not of evil, to give you hope and a future.",
        reference: "Jeremiah 29:11",
        translation: "World English Bible",
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  }
}
