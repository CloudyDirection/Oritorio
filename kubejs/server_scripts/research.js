ResearchdEvents.registerResearchPacks(event => {
    event.create('kubejs:basic_pack')
        .literalName("Red pack")
        .literalDescription("The starting research pack")
        .color(255, 0, 0)
        .sortingValue(1);
});

ResearchdEvents.registerResearchPacks(event => {
    event.create('kubejs:green_pack')
        .literalName("Green pack")
        .literalDescription("I am researching so hard rn")
        .color(0, 255, 0)
        .sortingValue(2);
});

ResearchdEvents.researchCompleted(event => {
        event.player.tell(`${event.player.username} completed research ${event.research}`);
});