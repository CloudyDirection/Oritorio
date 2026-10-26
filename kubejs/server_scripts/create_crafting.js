//script for editing create mod crafts

ServerEvents.recipes(event => {

    event.remove({ output: 'create:andesite_alloy' }),
    event.remove({ output: "create:brass_ingot" })
    event.remove({ output: "createaddition:connector"})
    event.remove({ output: "createaddition:electric_motor"})
    
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
        event.recipes.minecraft.crafting_shaped('createaddition:electric_motor', 
        [
            'ADA',
            'ACA',
            'ABA'
        ],
    {
      A: "minecraft:gold_ingot",
      B: "oritech:motor",
      C: "createaddition:iron_rod",
      D: "createaddition:connector"

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
