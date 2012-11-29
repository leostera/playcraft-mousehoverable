MouseHoverableSystem = pc.systems.Input.extend('MouseHoverableSystem',
  {
    
  },
  {
    isBeingHovered: false,
    init: function() {
      this._super(["MouseHoverableComponent"]);
    },

    process: function(entity) {
      this._super(entity)
      if(this.isInputState(entity, "hover")) {
        if(this.isBeingHovered === false){
          console.log("You just hovered me!");
          this.isBeingHovered = true;
        }
      } else {
        this.isBeingHovered = false;
      }

    }

  });