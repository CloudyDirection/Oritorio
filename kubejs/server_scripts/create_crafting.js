//script for editing create mod crafts

ServerEvents.recipes(event => {

    event.remove({ output: 'create:andesite_alloy' }),
    event.remove({ output: "create:brass_ingot" })
    event.remove({ output: "createaddition:connector"})
    
    event.recipes.create.mixing('create:andesite_alloy', ['minecraft:iron_ingot', 'minecraft:andesite'], 100),
    event.recipes.create.mixing('oritech:steel_ingot', ['minecraft:iron_ingot', 'oritech:coal_dust'], 100),
    
    event.recipes.minecraft.crafting_shaped('create:andesite_alloy', 
        [
            'AB',
            'BA'
        ],
    {
      A: "minecraft:iron_ingot",
      B: "minecraft:andesite"
    })
        event.shapeless(
        "createaddition:connector",
        [
            'createaddition:copper_rod',
            'create:andesite_alloy',
            "createaddition:iron_wire"
        ]
    )
})
