describe("the game", function(){
  beforeEach(function(){
    player.x = 0;
    player.y = 0;
  });

  describe("moveRight", function(){
    it("should add 1 to player.x", function(){
      moveRight();
      expect(player.x).toEqual(1);
    });
  });

  describe("moveLeft", function(){
    it("should subtract 1 from player.x", function(){
      moveLeft();
      expect(player.x).toEqual(-1);
    });
  });

  describe("moveDown", function(){
    it("should subtract 1 from player.y", function(){
      moveDown();
      expect(player.y).toEqual(1);
    });
  });

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

  it("should be called after moveRight", function(){
    spyOn(window, 'checkWin');
    moveRight();
    expect(window.checkWin).toHaveBeenCalled();
  });

  it("should be called after moveLeft", function(){
    spyOn(window, 'checkWin');
    moveLeft();
    expect(window.checkWin).toHaveBeenCalled();
  });

  it("should be called after moveDown", function(){
    spyOn(window, 'checkWin');
    moveDown();
    expect(window.checkWin).toHaveBeenCalled();
  });

  it("should be called after moveUp", function(){
    spyOn(window, 'checkWin');
    moveUp();
    expect(window.checkWin).toHaveBeenCalled();
  });
});