ResearchdEvents.registerResearches(event => {
     event.create("drill")
    .literalName("Drill")
    .consumePack("kubejs:basic_pack", 5, 5)
    .icon("create:mechanical_drill")
    .effect(ResearchEffectHelper.unlockRecipe("create:crafting/kinetics/mechanical_drill"))
        
    event.create("mixer")
    .literalName("Mixer")
    .consumePack("kubejs:basic_pack", 90, 5)
    .icon("create:mechanical_mixer")
    .effect(ResearchEffectHelper.unlockRecipe("create:crafting/kinetics/mechanical_mixer"))
    event.create("steel")
    .literalName("Steel production")
    .parent("mixer")
    .consumePack("kubejs:basic_pack", 90, 5)
    .icon("oritech:steel_ingot")
    .effect(ResearchEffectHelper.unlockRecipe("create:kjs/oritech_steel_ingot"))
    
     event.create("brass")
    .literalName("Brass production")
    .parent("mixer")
    .consumePack("kubejs:basic_pack", 2400, 5)
    .icon("create:brass_ingot")
    .effect(ResearchEffectHelper.unlockRecipe("oritech:foundry/alloy/compat/create/brass"))


});
