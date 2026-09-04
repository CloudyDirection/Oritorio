===========================================================
            ETHEREAL DREAMSCAPE - MODPACK GUIDE            
===========================================================

This folder contains custom dreams for Ethereal Dreamscape.

Configuration (ethereal_dreamscape-client.toml):
- selectionMode: "RANDOM", "SEQUENTIAL", or "PROGRESSION"
  * RANDOM      : Classic weighted random dream selection.
  * SEQUENTIAL  : Plays dreams in exact JSON order (1st sleep -> 1st dream, 2nd -> 2nd...).
  * PROGRESSION : Selects dreams matching player's current night count and progression flags.
- sequentialLoop: true/false (loop back to start in sequential mode)

JSON Format in dreams.json:
{
  "dreams": [
    {
      "id": "night_1_welcome",
      "text": {
        "en_us": "Night 1: Always craft a torch to keep the shadows at bay...",
        "ru_ru": "Ночь 1: Всегда делайте факелы, чтобы отогнать тени..."
      },
      "color": "#FFD700",
      "night": 1,
      "one_time": true,
      "weight": 10
    },
    {
      "id": "forest_wanderer",
      "text": {
        "en_us": "You hear the whispers of the ancient trees...",
        "ru_ru": "Вы слышите шёпот древних деревьев..."
      },
      "biomes": ["minecraft:old_growth_taiga", "#minecraft:is_forest"],
      "min_night": 2,
      "max_night": 10
    }
  ]
}

Supported Fields:
- id: Unique ID for this dream (used for progression and tracking).
- text: Multilingual map of language codes to texts (e.g. en_us, ru_ru).
- color: Custom hex text color (e.g. #FFD700 for gold, #8A2BE2 for purple).
- night: Exact night number when this dream will appear (1 = first night slept).
- min_night / max_night: Night range where this dream is eligible.
- one_time: true/false (if true, dream is only shown once).
- biomes: Optional array of biome IDs or biome tags.
- dimension: Optional dimension ID (e.g. minecraft:overworld).
- weight: Selection weight for random dream picking (default: 10).

In-Game Commands:
- /dreams status  : View current mode, night count, and progress info.
- /dreams reset   : Reset player progression / sleep counter.
- /dreams reload  : Reload dreams.json live without restarting!
- /dreams test    : Preview a dream overlay live on screen.
