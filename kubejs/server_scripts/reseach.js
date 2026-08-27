ResearchdEvents.registerResearchPacks(event => {
    event.create('rd_example_js:basic_pack')
        .translatableName("Red pack")
        .translatableDescription("")
        .color(255, 0, 0)
        .sortingValue(1);
});

ResearchdEvents.registerResearches(event => {
});