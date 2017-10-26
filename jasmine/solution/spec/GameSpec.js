// Here is where your tests will go.

describe("the game", function(){
  beforeEach(function(){
    player.x = 0;
    player.y = 0;
  });

  // write a test describing the function called moveRight
  describe("moveRight", function(){
    it("should add 1 to player.x", function(){
      moveRight();
      expect(player.x).toEqual(1);
    });
  });

  // write a test describing the function called moveLeft
  describe("moveLeft", function(){
    it("should subtract 1 from player.x", function(){
      moveLeft();
      expect(player.x).toEqual(-1);
    });
  });

  // write a test describing the function called moveDown
  describe("moveDown", function(){
    it("should subtract 1 from player.y", function(){
      moveDown();
      expect(player.y).toEqual(1);
    });
  });

  // write a test describing the function called moveUp
  describe("moveUp", function(){
    it("should subtract 1 from player.y", function(){
      moveUp();
      expect(player.y).toEqual(-1);
    });
  });
});

describe("checkWin", function(){
  it("should return true if the player's coordinates match the goal's coordinates", function(){
    player.x = 1;
    player.y = 1;
    goal.x = 1;
    goal.y = 1;
    expect(checkWin()).toEqual(true);
  });

  it("should return false if the player's coordinates do not match the goal's coordinates", function(){
    player.x = 1;
    player.y = 2;
    goal.x = 1;
    goal.y = 1;
    expect(checkWin()).toEqual(false);
  });

  it("should be called after render", function(){
    spyOn(window, 'render');
    checkWin
    expect(window.render).toHaveBeenCalled();
  });
});