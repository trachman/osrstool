/**
 * @class View
 *
 * Visual representation of the model.
 */
export default class View {
    constructor() {
        this.showTool = true;
        this.combatShown = false;
        this.combatLastClicked = false;
        this.hiscoresLastClicked = false;
    }

    createCombatInputs() {
        this.combatLastClicked = true;
        this.showTool = false;
        // inputs
        this.attackInput = document.createElement("input");
        this.strengthInput = document.createElement("input");
        this.defenseInput = document.createElement("input");
        this.hitpointsInput = document.createElement("input");
        this.prayerInput = document.createElement("input");
        this.rangeInput = document.createElement("input");
        this.magicInput = document.createElement("input");
        // labels
        this.attackLabel = document.createElement("label");
        this.strengthLabel = document.createElement("label");
        this.defenseLabel = document.createElement("label");
        this.hitpointsLabel = document.createElement("label");
        this.prayerLabel = document.createElement("label");
        this.rangeLabel = document.createElement("label");
        this.magicLabel = document.createElement("label");
        var elementArray = [ [this.attackLabel, this.attackInput], 
                            [this.strengthLabel, this.strengthInput], 
                            [this.defenseLabel, this.defenseInput], 
                            [this.hitpointsLabel, this.hitpointsInput], 
                            [this.prayerLabel, this.prayerInput],
                            [this.rangeLabel, this.rangeInput], 
                            [this.magicLabel, this.magicInput] ];
        var innerhtml = ["Attack Level", "Strength Level", "Defence Level", "Hitpoints Level",
                        "Prayer Level", "Range Level", "Magic Level"];
        for (let i = 0; i < elementArray.length; i++) {
            elementArray[i][0].innerHTML = innerhtml[i];
            elementArray[i][0].className = "level-labels";
            elementArray[i][1].type = "text";
            elementArray[i][1].className = "combatinput";
            let div = document.createElement("div");
            div.id = "child"+i;
            div.className = "children";
            document.getElementById("root").appendChild(div);
            for (let j = 0; j < 2; j++) {
                document.getElementById("child"+i).appendChild(elementArray[i][j]);
            }
        }

        // create a button to caculate the combat level with the given inputs
        this.submit = document.createElement("a");
        this.submitDiv = document.createElement("div");
        this.submitDiv.className = "submit-wrapper";
        this.submit.className = "ghost-button-search";
        this.submit.href = "#0";
        this.submit.innerHTML = "Calculate";
        this.submitDiv.appendChild(this.submit);
        document.getElementById("root").appendChild(this.submitDiv);
    }

    createHiscoreInputs() {
        this.hiscoresLastClicked = true;
        this.showTool = false;
        this.hiscoreDiv = document.createElement("div");
        this.hiscoreSearchDiv = document.createElement("div");
        this.playerNameInput = document.createElement("input");
        this.playerNameSubmit = document.createElement("a");
        this.playerNameSubmit.className = "ghost-button-search";
        this.playerNameSubmit.href = "#0";
        this.playerNameSubmit.innerHTML = "Search";
        this.playerNameInput.className = "hiscore-player-input";
        this.hiscoreDiv.className = "container";
        this.hiscoreSearchDiv.className = "hiscore-search-div";
        this.hiscoreSearchDiv.appendChild(this.playerNameInput);
        this.hiscoreSearchDiv.appendChild(this.playerNameSubmit);
        this.hiscoreDiv.appendChild(this.hiscoreSearchDiv);
        
        document.getElementById("root").appendChild(this.hiscoreDiv);

        // this is the beginning of the level grid
        this.levelContainer = document.createElement("div");
        this.levelContainer.className = "level-grid";

        // first column
        this.attackHiscore = document.createElement("div");
        this.strengthHiscore = document.createElement("div");
        this.defenseHiscore = document.createElement("div");
        this.rangeHiscore = document.createElement("div");
        this.prayerHiscore = document.createElement("div");
        this.magicHiscore = document.createElement("div");
        this.runecraftHiscore = document.createElement("div");
        this.constructionHiscore = document.createElement("div");
        this.attackHiscoreImg = document.createElement("img");
        this.strengthHiscoreImg = document.createElement("img");
        this.defenseHiscoreImg = document.createElement("img");
        this.rangeHiscoreImg = document.createElement("img");
        this.prayerHiscoreImg = document.createElement("img");
        this.magicHiscoreImg = document.createElement("img");
        this.runecraftHiscoreImg = document.createElement("img");
        this.constructionHiscoreImg = document.createElement("img");
        this.attackHiscoreLabel = document.createElement("label");
        this.strengthHiscoreLabel = document.createElement("label");
        this.defenseHiscoreLabel = document.createElement("label");
        this.rangeHiscoreLabel = document.createElement("label");
        this.prayerHiscoreLabel = document.createElement("label");
        this.magicHiscoreLabel = document.createElement("label");
        this.runecraftHiscoreLabel = document.createElement("label");
        this.constructionHiscoreLabel = document.createElement("label");

        // second column
        this.hitpointsHiscore = document.createElement("div");
        this.agilityHiscore = document.createElement("div");
        this.herbloreHiscore = document.createElement("div");
        this.thievingHiscore = document.createElement("div");
        this.craftingHiscore = document.createElement("div");
        this.fletchingHiscore = document.createElement("div");
        this.slayerHiscore = document.createElement("div");
        this.hunterHiscore = document.createElement("div");
        this.hitpointsHiscoreImg = document.createElement("img");
        this.agilityHiscoreImg = document.createElement("img");
        this.herbloreHiscoreImg = document.createElement("img");
        this.thievingHiscoreImg = document.createElement("img");
        this.craftingHiscoreImg = document.createElement("img");
        this.fletchingHiscoreImg = document.createElement("img");
        this.slayerHiscoreImg = document.createElement("img");
        this.hunterHiscoreImg = document.createElement("img");
        this.hitpointsHiscoreLabel = document.createElement("label");
        this.agilityHiscoreLabel = document.createElement("label");
        this.herbloreHiscoreLabel = document.createElement("label");
        this.thievingHiscoreLabel = document.createElement("label");
        this.craftingHiscoreLabel = document.createElement("label");
        this.fletchingHiscoreLabel = document.createElement("label");
        this.slayerHiscoreLabel = document.createElement("label");
        this.hunterHiscoreLabel = document.createElement("label");

        // third column
        this.miningHiscore = document.createElement("div");
        this.smithingHiscore = document.createElement("div");
        this.fishingHiscore = document.createElement("div");
        this.cookingHiscore = document.createElement("div");
        this.firemakingHiscore = document.createElement("div");
        this.woodcuttingHiscore = document.createElement("div");
        this.farmingHiscore = document.createElement("div");
        this.totalHiscore = document.createElement("div");
        this.miningHiscoreImg = document.createElement("img");
        this.smithingHiscoreImg = document.createElement("img");
        this.fishingHiscoreImg = document.createElement("img");
        this.cookingHiscoreImg = document.createElement("img");
        this.firemakingHiscoreImg = document.createElement("img");
        this.woodcuttingHiscoreImg = document.createElement("img");
        this.farmingHiscoreImg = document.createElement("img");
        this.miningHiscoreLabel = document.createElement("label");
        this.smithingHiscoreLabel = document.createElement("label");
        this.fishingHiscoreLabel = document.createElement("label");
        this.cookingHiscoreLabel = document.createElement("label");
        this.firemakingHiscoreLabel = document.createElement("label");
        this.woodcuttingHiscoreLabel = document.createElement("label");
        this.farmingHiscoreLabel = document.createElement("label");
        this.totalHiscoreLabel = document.createElement("label");

        var grid_elements = [this.attackHiscore, this.hitpointsHiscore, this.miningHiscore, this.strengthHiscore,
            this.agilityHiscore, this.smithingHiscore, this.defenseHiscore, this.herbloreHiscore, this.fishingHiscore,
            this.rangeHiscore, this.thievingHiscore, this.cookingHiscore, this.prayerHiscore, this.craftingHiscore, 
            this.firemakingHiscore, this.magicHiscore, this.fletchingHiscore, this.woodcuttingHiscore, 
            this.runecraftHiscore, this.slayerHiscore, this.farmingHiscore, this.constructionHiscore, 
            this.hunterHiscore, this.totalHiscore];

        var levels = [this.attackHiscoreLabel, this.hitpointsHiscoreLabel, this.miningHiscoreLabel, this.strengthHiscoreLabel,
            this.agilityHiscoreLabel, this.smithingHiscoreLabel, this.defenseHiscoreLabel, this.herbloreHiscoreLabel, this.fishingHiscoreLabel,
            this.rangeHiscoreLabel, this.thievingHiscoreLabel, this.cookingHiscoreLabel, this.prayerHiscoreLabel, this.craftingHiscoreLabel, 
            this.firemakingHiscoreLabel, this.magicHiscoreLabel, this.fletchingHiscoreLabel, this.woodcuttingHiscoreLabel, 
            this.runecraftHiscoreLabel, this.slayerHiscoreLabel, this.farmingHiscoreLabel, this.constructionHiscoreLabel,
            this.hunterHiscoreLabel, this.totalHiscoreLabel];
        
        for (let i = 0; i < levels.length; i++) {
            levels[i].className = "level";
            if (i == levels.length-1) levels[i].innerHTML = "Total"
            else levels[i].innerHTML = "1";
        }

        var images = [this.attackHiscoreImg, this.hitpointsHiscoreImg, this.miningHiscoreImg, this.strengthHiscoreImg,
            this.agilityHiscoreImg, this.smithingHiscoreImg, this.defenseHiscoreImg, this.herbloreHiscoreImg, this.fishingHiscoreImg,
            this.rangeHiscoreImg, this.thievingHiscoreImg, this.cookingHiscoreImg, this.prayerHiscoreImg, this.craftingHiscoreImg, 
            this.firemakingHiscoreImg, this.magicHiscoreImg, this.fletchingHiscoreImg, this.woodcuttingHiscoreImg, 
            this.runecraftHiscoreImg, this.slayerHiscoreImg, this.farmingHiscoreImg, this.constructionHiscoreImg, 
            this.hunterHiscoreImg];

        var imageEndpoints = ["_attack.png", "_hitpoints.png", "_mining.png", "_strength.png", "_agility.png",
            "_smithing.png", "_defence.png", "_herblore.png", "_fishing.png", 
            "_range.png", "_thieving.png", "_cooking.png", "_prayer.png", "_crafting.png",
            "_firemaking.png", "_magic.png", "_fletching.png", "_woodcutting.png", "_runecraft.png", 
            "_slayer.png", "_farming.png", "_construction.png", "_hunter.png"];
        
        // just an initial if statement to make sure they are of the same length
        let baseFilePath = "/src/images/levels/";
        for (let i = 0; i < images.length; i++) {
            images[i].className = "level-image";
            images[i].src = baseFilePath + imageEndpoints[i];
        }
        
        for (let i = 0; i < grid_elements.length; i++) {
            grid_elements[i].className = "level-grid-item";
            if (i != grid_elements.length-1){
                grid_elements[i].appendChild(images[i]);
                grid_elements[i].appendChild(levels[i]);
            } else {
                grid_elements[i].appendChild(levels[i]);
            }
            this.levelContainer.appendChild(grid_elements[i]);
        }
        document.getElementsByClassName("container")[0].appendChild(this.levelContainer);
    }

    destroyTool() {
        this.combatLastClicked = false;
        this.hiscoresLastClicked = false;
        var childNodes = document.getElementById("root").childNodes;
        var childNodeSize = childNodes.length;
        for (let i = 0; i < childNodeSize; i++) {
            document.getElementById("root").removeChild(childNodes[0]);
        }
        this.showTool = true;
    }
}