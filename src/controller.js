/**
 * @class Controller
 *
 * Links the user input and the view output.
 * Try to make this read as simple as possible.
 *
 * @param model
 * @param view
 */
export default class Controller {
    constructor(model, view) {  
        this.model = model;
        this.view = view;
    }

    combatLevelCalculator() {
        if (this.view.showTool && !this.view.combatLastClicked) {
            this.view.createCombatInputs();
        } else if (this.view.combatLastClicked) {
            this.view.destroyTool();
            this.view.combatShown = false;
            this.view.combatLastClicked = false;
            this.view.showTool = true;
        } else {
            this.view.destroyTool();
            this.view.createCombatInputs();
            this.view.combatShown = false;
        }
        this.view.submit.onclick = () => {
            this.model.calculateCombatLevel(this.view);
        }
    }

    hiscores() {
        if (this.view.showTool && !this.view.hiscoresLastClicked) {
            this.view.createHiscoreInputs();
        } else if (this.view.hiscoresLastClicked) {
            this.view.destroyTool();
            this.view.levelShown = false;
            this.view.hiscoresLastClicked = false;
            this.view.showTool = true;
        } else {
            this.view.destroyTool();
            this.view.createHiscoreInputs();
            this.view.levelShown = false;
        }
        this.view.playerNameSubmit.onclick = async () => {
            var username = this.view.playerNameInput.value;
            var levels = await this.model.hiscores(username);
            if (levels != -1) this.draw_levels(levels); 
            this.view.levelShown = true;
        };
    }

    grandExchange() {
        this.view.destroyTool();
        console.log('Starting background algorithm play.');
        this.model.binarySearchTree();        
    }

    bestInSlot() {
        this.view.destroyTool();
        console.log("under construction ...");
    }

    logIn() {
        this.view.destroyTool();
        console.log("we mean business.")
    }

    // going to be changed in future updates
    draw_levels(jsonLevels) {
        this.view.attackHiscoreLabel.innerHTML = jsonLevels['attack'];
        this.view.strengthHiscoreLabel.innerHTML = jsonLevels['strength'];
        this.view.defenseHiscoreLabel.innerHTML = jsonLevels['defence']
        this.view.rangeHiscoreLabel.innerHTML = jsonLevels['ranged']
        this.view.prayerHiscoreLabel.innerHTML = jsonLevels['prayer']
        this.view.magicHiscoreLabel.innerHTML = jsonLevels['magic']
        this.view.runecraftHiscoreLabel.innerHTML = jsonLevels['runecraft']
        this.view.constructionHiscoreLabel.innerHTML = jsonLevels['construction'];
        this.view.hitpointsHiscoreLabel.innerHTML = jsonLevels["hitpoints"];
        this.view.agilityHiscoreLabel.innerHTML = jsonLevels["agility"];
        this.view.herbloreHiscoreLabel.innerHTML = jsonLevels["herblore"];
        this.view.thievingHiscoreLabel.innerHTML = jsonLevels["thieving"];
        this.view.craftingHiscoreLabel.innerHTML = jsonLevels["crafting"];
        this.view.fletchingHiscoreLabel.innerHTML = jsonLevels["fletching"];
        this.view.slayerHiscoreLabel.innerHTML = jsonLevels["slayer"];
        this.view.hunterHiscoreLabel.innerHTML = jsonLevels["hunter"];
        this.view.miningHiscoreLabel.innerHTML = jsonLevels["mining"];
        this.view.smithingHiscoreLabel.innerHTML = jsonLevels["smithing"];
        this.view.fishingHiscoreLabel.innerHTML = jsonLevels["fishing"];
        this.view.cookingHiscoreLabel.innerHTML = jsonLevels["cooking"];
        this.view.firemakingHiscoreLabel.innerHTML = jsonLevels["firemaking"];
        this.view.woodcuttingHiscoreLabel.innerHTML = jsonLevels["woodcutting"];
        this.view.farmingHiscoreLabel.innerHTML = jsonLevels["farming"];
        this.view.totalHiscoreLabel.innerHTML = (`Total      ${jsonLevels["overall"]}`);
    }
}