//script for ore crafting

ServerEvents.recipes(event => {
    
    event.recipes.create.mixing("minecraft:raw_iron", "8x advanced_ore_deposits:raw_iron_chunk"),
    event.recipes.create.mixing("minecraft:andesite", "8x advanced_ore_deposits:raw_andesite_chunk")
    
})