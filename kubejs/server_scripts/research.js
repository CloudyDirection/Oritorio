ResearchdEvents.registerResearchPacks(event => {
    event.create('kubejs:basic_pack')
        .literalName("Red pack")
        .literalDescription("The starting research pack")
        .color(255, 0, 0)
        .sortingValue(1);
});

ResearchdEvents.researchCompleted(event => {
        event.player.tell(`${event.player.username} completed research ${event.research}`);
});