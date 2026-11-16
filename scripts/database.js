
const SUPABASE_URL = "https://uglwmchoodfrgtqxdcam.supabase.co";
const SUPABASE_KEY = "sb_publishable_WHCWW5ZpjFCsgbh4fWHmpA_sE7fLDJn";

async function getGameData() {
    const response = await fetch(
        `${SUPABASE_URL}/rest/v1/live_game_data?select=*`,
        {
            method: "GET",
            headers: {
                "apikey": SUPABASE_KEY,
                "Authorization": "Bearer " + SUPABASE_KEY
            }
        }
    );

    if (!response.ok) {
        throw new Error("Failed to get game data");
    }

    const records = await response.json();

    // Convert database records into an object
    const gameData = {};

    for (const record of records) {
        gameData[record.data_key] = record.data_value;
    }

    return gameData;
}
