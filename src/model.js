/**
 * @class Model
 *
 * Manages the data of the application.
 */

export default class Model {
    constructor() {}

    // calculates the combat level and puts it to the screen
    calculateCombatLevel(view) {
        // remove the last combat level if user is recalculating
        if (view.combatShown) {
            var node = document.getElementById("removeable");
            document.getElementById("root").removeChild(node);
        }
        // formula for combatLevel
        var base = (parseInt(view.defenseInput.value)
            + parseInt(view.hitpointsInput.value) 
            + (parseInt(view.prayerInput.value)/2))/4
        var melee = 13*(parseInt(view.attackInput.value) + parseInt(view.strengthInput.value))/40;
        var range = 13*(parseInt(view.rangeInput.value)*(3/2))/40;
        var mage = 13*(parseInt(view.magicInput.value)*(3/2))/40; 
        var combatLevel = base + Math.max(melee, range, mage);


        // find the other formulas for combat level using range and mage
        view.combatDiv = document.createElement("div");
        view.combatLevelLabel = document.createElement("label");
        view.combatDiv.className = "submit-wrapper";
        view.combatDiv.id = "removeable";
        view.combatLevelLabel.id = "combat-level";
        view.combatLevelLabel.innerHTML = "Your combat level is " + combatLevel;
        view.combatDiv.appendChild(view.combatLevelLabel);
        document.getElementById("root").appendChild(view.combatDiv);
        view.combatShown = true;
    }

    binarySearchTree() {
        // Node class
        class Node 
        {
            constructor(data) {
                this.data = data;
                this.left = null;
                this.right = null;
            }
        }

        class BinarySearchTree
        {
            constructor() {
                this.root = null;
            }

            insert(data) {
                var newNode = new Node(data);

                if(this.root === null) {
                    this.root = newNode;
                } else {
                    this.insertNode(this.root, newNode);
                }
            }

            insertNode(node, newNode) {
                if (newNode.data < node.data) {
                    if (node.left === null) {
                        node.left = newNode;
                    } else {
                        this.insertNode(node.left, newNode);
                    }
                } else {
                    if (node.right === null) {
                        node.right = newNode;
                    } else {
                        this.insertNode(node.right, newNode);
                    }
                }
            }

            remove(data) {
                this.root = this.removeNode(this.root, data);
            }

            removeNode(node, key) {
                if (node === null) {
                    return null;
                } else if (key < node.data) {
                    node.left = this.removeNode(node.left, key);
                    return node;
                } else if (key > node.data) {
                    node.right = this.removeNode(node.right, key);
                } else {
                    if (node.left === null && node.right === null) {
                        node = null;
                        return node;
                    }
                    if (node.left === null) {
                        node = node.right;
                        return node;
                    }
                    else if (node.right === null) {
                        node = node.left;
                        return node;
                    }
                    var aux = this.findMinNode(node.right);
                    node.data = aux.data;
                    node.right = this.removeNode(node.right, aux.data);
                    return node;
                }
            }

            // tree traversals
            inorder(node) {
                if (node !== null) {
                    this.inorder(node.left);
                    console.log(node.data);
                    this.inorder(node.right);
                }
            }

            preorder(node) {
                if (node !== null) {
                    console.log(node.data);
                    this.inorder(node.left);
                    this.inorder(node.right);
                }
            }

            postorder(node) {
                if (node !== null) {
                    this.inorder(node.left);
                    this.inorder(node.right);
                    console.log(node.data);
                }
            }

            

            // helper methods
            findMinNode(node) {
                if (node.left === null) {
                    return node;
                } else {
                    return this.findMinNode(node.left);
                }
            }

            getRootNode() {
                return this.root;
            }

            search(node, data) {
                if (node === null) {
                    return null;
                } else if (data < node.data) {
                    return this.search(node.left, data);
                } else if (data > node.data) {
                    return this.search(node.right, data);
                } else {
                    return node;
                }
            }
        }
        console.log('BINARY SEARCH TREE')
        var BST = new BinarySearchTree();
        BST.insert(15);
        BST.insert(25);
        BST.insert(10);
        BST.insert(7);
        BST.insert(22);
        BST.insert(17);
        BST.insert(13);
        BST.insert(5);
        BST.insert(9);
        BST.insert(27);

        var root = BST.getRootNode();
        BST.inorder(root);

        BST.remove(5);
        var root = BST.getRootNode();
        BST.inorder(root);

        BST.remove(7);
        var root = BST.getRootNode();
        BST.inorder(root);

        BST.remove(15);
        var root = BST.getRootNode();
        console.log("inorder traversal"); 
  
        // prints 9 10 13 17 22 25 27 
        BST.inorder(root); 
                    
        console.log("postorder traversal"); 
        BST.postorder(root); 
        console.log("preorder traversal"); 
        BST.preorder(root);
    }

    // retrieves the highscore information of the entered player
    async hiscores(username) {
        // be careful because the runelite version changes and can throw http 404 errors 
        const url = "https://api.runelite.net/runelite-1.6.26.1/hiscore/normal?username=" + username;
        try {
            var response = await fetch(url);
            const levels = ["overall", "attack", "defence", "strength", "hitpoints", "ranged", "prayer",
                            "magic", "cooking", "woodcutting", "fletching", "fishing", 
                            "firemaking", "crafting", "smithing", "mining", "herblore",
                            "agility", "thieving", "slayer", "farming", "runecraft", 
                            "hunter", "construction"];
            if (response.ok) {
                // if HTTP-status is 200-299
                var json = await response.json();
                var levelDict = {}
                for (let level of levels) {
                    levelDict[level] = json[level].level;
                }
                if (levels.length == 0) {
                    console.log("The user " + username + " is not registered in the server.");
                } else {
                    console.log("The levels for " + username + "are:");
                    console.log(levelDict);
                    return levelDict;
                }
            } else {
                alert("HTTP-Error: " + response.status);
                return -1;
            }
        }
        catch (e) {
            console.log(e.message + " " + e.name +  ". The user is not registered in the runescape database. Please ensure the name you entered is correct.");
            alert("HTTP-Error: " + e.name + " " + e.message);
            return -1;
        }
    } 
}