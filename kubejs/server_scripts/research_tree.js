//TODO: replace 90, 5 placeholder values
ResearchdEvents.registerResearches(event => {
     event.create("drill")
    .literalName("Drill")
    .consumePack("kubejs:basic_pack", 5, 5)
    .icon("create:mechanical_drill")
    .effect(ResearchEffectHelper.unlockRecipe("create:crafting/kinetics/mechanical_drill"))

    event.create("rolling")
    .literalName("Rolling mill")
    .parent("drill")
    .consumePack("kubejs:basic_pack", 90, 5)
    .icon("createaddition:rolling_mill")
    .effect(ResearchEffectHelper.unlockRecipe("createaddition:crafting/rolling_mill"))
        
    event.create("mill")
    .literalName("Millstone")
    .parent("drill")
    .consumePack("kubejs:basic_pack", 90, 5)
    .icon("create:millstone")
    .effect(ResearchEffectHelper.unlockRecipe("create:crafting/kinetics/millstone"))

    event.create("mixer")
    .literalName("Mixer")
    .parent("drill")
    .consumePack("kubejs:basic_pack", 90, 5)
    .icon("create:mechanical_mixer")
    .effect(ResearchEffectHelper.unlockRecipe("create:crafting/kinetics/mechanical_mixer"))

    event.create("steel")
    .literalName("Steel production")
    .parents("mixer", "mill")
    .consumePack("kubejs:basic_pack", 90, 5)
    .icon("oritech:steel_ingot")
    .effect(ResearchEffectHelper.unlockRecipe("create:kjs/oritech_steel_ingot"))
    
    event.create("coil")
    .literalName("Magnetic coil")
    .parents("rolling", "steel")
    .consumePack("kubejs:basic_pack", 90, 5)
    .icon("oritech:magnetic_coil")
    .effect(ResearchEffectHelper.unlockRecipe("minecraft:kjs/oritech_magnetic_coil"))

    event.create("electricity_1")
    .literalName("Electricity 1")
    .parents("rolling", "coil")
    .consumePack("kubejs:basic_pack", 90, 5)
    .icon("createaddition:copper_spool")
    .effect(ResearchEffectHelper.and(ResearchEffectHelper.unlockRecipe("kubejs:kjs/createaddition_connector"),
ResearchEffectHelper.unlockRecipe("createaddition:crafting/copper_spool"),
ResearchEffectHelper.unlockRecipe("oritech:crafting/basicgen"),
ResearchEffectHelper.unlockRecipe("minecraft:kjs/oritech_machine_core_2")
))

    event.create("foundry")
    .literalName("Foundry")
    .parent("electricity_1")
    .consumePack("kubejs:basic_pack", 90, 5)
    .icon("oritech:foundry_block")
    .effect(ResearchEffectHelper.unlockRecipe("minecraft:kjs/oritech_foundry_block"))
    
     event.create("brass")
    .literalName("Brass production")
    .parent("foundry")
    .consumePack("kubejs:basic_pack", 2400, 5)
    .icon("create:brass_ingot")
    .effect(ResearchEffectHelper.unlockRecipe("oritech:foundry/alloy/compat/create/brass"))


});
