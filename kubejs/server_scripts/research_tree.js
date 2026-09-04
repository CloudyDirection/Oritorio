ResearchdEvents.registerResearches(event => {
     event.create("drill")
    .literalName("Drill")
    .consumePack("kubejs:basic_pack", 5, 150)
    .icon("create:mechanical_drill")
    .effect(ResearchEffectHelper.unlockRecipe("create:mechanical_drill"))
        
    event.create("mixer")
    .literalName("Mixer")
    .parent("drill")
    .consumePack("kubejs:basic_pack", 90, 150)
    .icon("create:mechanical_mixer")
    .effect(ResearchEffectHelper.unlockRecipe("create:mechanical_mixer"))


});
