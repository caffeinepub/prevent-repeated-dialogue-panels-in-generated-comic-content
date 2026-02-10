import Text "mo:core/Text";
import Set "mo:core/Set";
import Runtime "mo:core/Runtime";

actor {
  public shared ({ caller }) func deduplicateComicText(textLines : [Text]) : async [Text] {
    if (textLines.size() == 0) {
      Runtime.trap("Input array is empty. No text lines to deduplicate.");
    };
    let seen = Set.empty<Text>();
    let deduplicated = textLines.filter(
      func(line) {
        if (seen.contains(line)) {
          false;
        } else {
          seen.add(line);
          true;
        };
      }
    );
    deduplicated;
  };
};
