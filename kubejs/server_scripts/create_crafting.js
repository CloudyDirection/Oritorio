//script for editing create mod crafts

ServerEvents.recipes(event => {

    event.remove({ output: 'create:andesite_alloy' }),
    
    event.recipes.create.mixing('create:andesite_alloy', ['minecraft:iron_ingot', 'minecraft:andesite'], 20),
    
    event.recipes.minecraft.crafting_shaped('create:andesite_alloy', 
        [
            'AB',
            'BA'
        ],
    {
      A: "minecraft:iron_ingot",
      B: "minecraft:andesite"
    })
    
})
