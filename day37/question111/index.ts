
/* Question : 111
        Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

        Explain & TIP : Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
*/

// This function categorizes a person's age group
function categorizeAge(age: number): string {
    if (age < 13) { return "child";
    } else if (age <= 19) { return "teenager";
    } else { return "adult";
    }
  }
  
  console.log(categorizeAge(12)); // Outputs: child
  console.log(categorizeAge(18)); // Outputs: teenager
  console.log(categorizeAge(25)); // Outputs: adult
  // Based on the age provided, we log the corresponding age group.