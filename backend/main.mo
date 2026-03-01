import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  public query ({ caller }) func healthCheck() : async Text {
    "Actor is running and accessible";
  };
};
