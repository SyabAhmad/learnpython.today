import { GameBuilder } from "@/types/game";
import { Language, GameMechanic } from "@/types/codeLine";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";

export const sqlBasicsGames = [
  new GameBuilder()
    .setTitle("SELECT Statement Syntax")
    .setHref("sql-select-basic")
    .setTags([])
    .setSynopsis("Fix the SQL SELECT statement")
    .setText(
      `SQL uses SELECT to retrieve data from tables. Find and fix the syntax error.`,
    )
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("SELECT")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "SELCT * FROM users",
            StateEnum.ERROR,
            "Typo: Should be SELECT not SELCT",
          ),
          new CodeLine(
            "SELECT * FROM users",
            StateEnum.CORRECT,
            "Correct: SELECT keyword spelled correctly",
            10,
          ),
          new CodeLine(
            "SELET * FROM users",
            StateEnum.WRONG,
            "Still a typo, missing C",
          ),
          new CodeLine(
            "SELECT FROM * users",
            StateEnum.WRONG,
            "Incorrect word order",
          ),
          new CodeLine("WHERE age > 18", StateEnum.NORMAL),
        ],
        Language.SQL,
        "id, name, age\n1, Alice, 25\n2, Bob, 30",
        "id, name, age\n1, Alice, 25\n2, Bob, 30",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("WHERE Clause")
    .setHref("sql-where-clause")
    .setTags([])
    .setSynopsis("Filter data with WHERE condition")
    .setText("Use WHERE to filter rows from a table based on conditions")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("WHERE")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("SELECT * FROM products", StateEnum.NORMAL),
          new CodeLine(
            "WHRE price > 100",
            StateEnum.ERROR,
            "Typo: Should be WHERE",
          ),
          new CodeLine(
            "WHERE price > 100",
            StateEnum.CORRECT,
            "Correct: WHERE clause spelled properly",
            10,
          ),
          new CodeLine(
            "WHERE price < 100",
            StateEnum.WRONG,
            "Wrong condition - should be > not <",
          ),
          new CodeLine(
            "WHEN price > 100",
            StateEnum.WRONG,
            "WHEN is used in CASE statements, not filtering",
          ),
        ],
        Language.SQL,
        "product_id, name, price\n1, Laptop, 999\n2, Mouse, 25",
        "product_id, name, price\n1, Laptop, 999",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("ORDER BY Clause")
    .setHref("sql-order-by")
    .setTags([])
    .setSynopsis("Sort query results")
    .setText("Use ORDER BY to sort results in ascending or descending order")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("ORDER BY")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("SELECT * FROM employees", StateEnum.NORMAL),
          new CodeLine(
            "ORDER BY salary DES",
            StateEnum.ERROR,
            "Typo: Should be DESC",
          ),
          new CodeLine(
            "ORDER BY salary DESC",
            StateEnum.CORRECT,
            "Correct: DESC for descending order",
            10,
          ),
          new CodeLine(
            "ORDER BY salary ASC",
            StateEnum.WRONG,
            "ASC is ascending, not descending",
          ),
          new CodeLine(
            "SORT BY salary DESC",
            StateEnum.WRONG,
            "SQL uses ORDER BY, not SORT BY",
          ),
        ],
        Language.SQL,
        "id, name, salary\n1, John, 50000\n2, Jane, 60000",
        "id, name, salary\n2, Jane, 60000\n1, John, 50000",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("JOIN Tables")
    .setHref("sql-join-basic")
    .setTags([])
    .setSynopsis("Combine data from multiple tables")
    .setText("Use JOIN to connect tables and retrieve related data")
    .setLevel(2)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("JOIN")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("SELECT users.name, orders.amount", StateEnum.NORMAL),
          new CodeLine("FROM users", StateEnum.NORMAL),
          new CodeLine(
            "INNER JOI orders ON users.id = orders.user_id",
            StateEnum.ERROR,
            "Typo: Should be INNER JOIN",
          ),
          new CodeLine(
            "INNER JOIN orders ON users.id = orders.user_id",
            StateEnum.CORRECT,
            "Correct: INNER JOIN spelled properly",
            10,
          ),
          new CodeLine(
            "INNER JOIN orders WHERE users.id = orders.user_id",
            StateEnum.WRONG,
            "Should use ON clause with JOIN, not WHERE",
          ),
          new CodeLine(
            "JOIN orders ON orders.user_id = users.id",
            StateEnum.WRONG,
            "Missing INNER keyword (though JOIN defaults to INNER)",
          ),
        ],
        Language.SQL,
        "name, amount\nJohn, 100",
        "name, amount\nJohn, 100",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("COUNT Aggregation")
    .setHref("sql-count-aggregate")
    .setTags([])
    .setSynopsis("Count rows in a table")
    .setText("Use COUNT() to count the number of rows matching a condition")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("Aggregation")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "SELECT CONT(*) as total_users",
            StateEnum.ERROR,
            "Typo: Should be COUNT",
          ),
          new CodeLine(
            "SELECT COUNT(*) as total_users",
            StateEnum.CORRECT,
            "Correct: COUNT function spelled properly",
            10,
          ),
          new CodeLine(
            "SELECT COUNT() as total_users",
            StateEnum.WRONG,
            "Missing (*) argument for COUNT function",
          ),
          new CodeLine(
            "SELECT SUM(*) as total_users",
            StateEnum.WRONG,
            "SUM adds values, COUNT counts rows",
          ),
          new CodeLine("FROM users", StateEnum.NORMAL),
        ],
        Language.SQL,
        "total_users\n1000",
        "total_users\n1000",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("GROUP BY Clause")
    .setHref("sql-group-by")
    .setTags([])
    .setSynopsis("Group rows by a column")
    .setText("Use GROUP BY to organize results into groups")
    .setLevel(2)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("GROUP BY")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "SELECT department, COUNT(*) as emp_count",
            StateEnum.NORMAL,
          ),
          new CodeLine("FROM employees", StateEnum.NORMAL),
          new CodeLine(
            "GROUP BY departmnt",
            StateEnum.ERROR,
            "Typo: Should be department",
          ),
          new CodeLine(
            "GROUP BY department",
            StateEnum.CORRECT,
            "Correct: department column spelled properly",
            10,
          ),
          new CodeLine(
            "GROUP BY emp_count",
            StateEnum.WRONG,
            "GROUP BY should use the actual column, not the alias",
          ),
          new CodeLine(
            "ORDER BY department",
            StateEnum.WRONG,
            "ORDER BY is not the same as GROUP BY",
          ),
        ],
        Language.SQL,
        "department, emp_count\nSales, 5",
        "department, emp_count\nSales, 5",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("DISTINCT Values")
    .setHref("sql-distinct")
    .setTags([])
    .setSynopsis("Get unique values")
    .setText("Use DISTINCT to remove duplicate rows from results")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("DISTINCT")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("SELECT DISTINCT city", StateEnum.NORMAL),
          new CodeLine("FORM users", StateEnum.ERROR, "Typo: Should be FROM"),
          new CodeLine(
            "FROM users",
            StateEnum.CORRECT,
            "Correct: FROM clause spelled properly",
            10,
          ),
          new CodeLine(
            "FROM DISTINCT users",
            StateEnum.WRONG,
            "DISTINCT comes after SELECT, not after FROM",
          ),
          new CodeLine(
            "WHERE DISTINCT city",
            StateEnum.WRONG,
            "WHERE is for filtering, use SELECT DISTINCT for unique values",
          ),
        ],
        Language.SQL,
        "city\nNew York\nLos Angeles",
        "city\nNew York\nLos Angeles",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("LIMIT Results")
    .setHref("sql-limit")
    .setTags([])
    .setSynopsis("Restrict number of rows returned")
    .setText("Use LIMIT to get only top N rows")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("LIMIT")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("SELECT * FROM products", StateEnum.NORMAL),
          new CodeLine(
            "LIMIT 5",
            StateEnum.ERROR,
            "Wrong: LIMIT alone at the start is incomplete",
          ),
          new CodeLine(
            "ORDER BY price DESC LIMIT 5",
            StateEnum.CORRECT,
            "Correct: ORDER BY before LIMIT",
            10,
          ),
          new CodeLine(
            "LIMIT 5 ORDER BY price DESC",
            StateEnum.WRONG,
            "LIMIT must come after ORDER BY",
          ),
          new CodeLine(
            "SELECT * FROM products LIMIT 5",
            StateEnum.WRONG,
            "Missing ORDER BY clause",
          ),
          new CodeLine(
            "SELECT * FROM products ORDER BY LIMIT 5",
            StateEnum.WRONG,
            "Syntax error: ORDER BY needs a column",
          ),
        ],
        Language.SQL,
        "product_id, name\n1, Laptop\n2, Mouse",
        "product_id, name\n1, Laptop",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("INSERT Statement")
    .setHref("sql-insert")
    .setTags([])
    .setSynopsis("Add new rows to a table")
    .setText("Use INSERT to add new data to a table")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("INSERT")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "INSRT INTO users (name, email)",
            StateEnum.ERROR,
            "Typo: Should be INSERT",
          ),
          new CodeLine(
            "INSERT INTO users (name, email)",
            StateEnum.CORRECT,
            "Correct: INSERT spelled properly",
            10,
          ),
          new CodeLine(
            "INSERT users (name, email)",
            StateEnum.WRONG,
            "Missing INTO keyword",
          ),
          new CodeLine(
            "ADD INTO users (name, email)",
            StateEnum.WRONG,
            "SQL uses INSERT not ADD",
          ),
          new CodeLine("VALUES ('John', 'john@example.com')", StateEnum.NORMAL),
        ],
        Language.SQL,
        "Success",
        "Success",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("UPDATE Statement")
    .setHref("sql-update")
    .setTags([])
    .setSynopsis("Modify existing data")
    .setText("Use UPDATE to change values in existing rows")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("UPDATE")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("UPDATE users", StateEnum.NORMAL),
          new CodeLine("SET email = 'newemail@example.com'", StateEnum.NORMAL),
          new CodeLine("WHRE id = 1", StateEnum.ERROR, "Typo: Should be WHERE"),
          new CodeLine(
            "WHERE id = 1",
            StateEnum.CORRECT,
            "Correct: WHERE clause spelled properly",
            10,
          ),
          new CodeLine(
            "WHEN id = 1",
            StateEnum.WRONG,
            "WHEN is used in CASE statements, not UPDATE",
          ),
          new CodeLine(
            "AND id = 1",
            StateEnum.WRONG,
            "Need WHERE keyword, not AND",
          ),
        ],
        Language.SQL,
        "1 row updated",
        "1 row updated",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("DELETE Statement")
    .setHref("sql-delete")
    .setTags([])
    .setSynopsis("Remove rows from a table")
    .setText("Use DELETE to remove rows from a table")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("DELETE")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "DELTE FROM users",
            StateEnum.ERROR,
            "Typo: Should be DELETE",
          ),
          new CodeLine(
            "DELETE FROM users",
            StateEnum.CORRECT,
            "Correct: DELETE spelled properly",
            10,
          ),
          new CodeLine(
            "REMOVE FROM users",
            StateEnum.WRONG,
            "SQL uses DELETE not REMOVE",
          ),
          new CodeLine(
            "DROP FROM users",
            StateEnum.WRONG,
            "DROP is used for tables/databases, not rows",
          ),
          new CodeLine("WHERE id = 5", StateEnum.NORMAL),
        ],
        Language.SQL,
        "1 row deleted",
        "1 row deleted",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("AND Operator")
    .setHref("sql-and-operator")
    .setTags([])
    .setSynopsis("Combine multiple WHERE conditions")
    .setText("Use AND to filter rows that match all conditions")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("Operators")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("SELECT * FROM employees", StateEnum.NORMAL),
          new CodeLine(
            "WHERE age > 25 OR salary > 50000",
            StateEnum.ERROR,
            "Missing AND operator - conditions should be combined with AND",
          ),
          new CodeLine(
            "WHERE age > 25 AND salary > 50000",
            StateEnum.CORRECT,
            "Correct: AND operator matches all conditions",
            10,
          ),
          new CodeLine(
            "WHERE age > 25 && salary > 50000",
            StateEnum.WRONG,
            "SQL uses AND, not && (that's for programming)",
          ),
          new CodeLine(
            "WHERE (age > 25) (salary > 50000)",
            StateEnum.WRONG,
            "Missing AND operator between conditions",
          ),
          new CodeLine(
            "WHERE age > 25, salary > 50000",
            StateEnum.WRONG,
            "Can't use comma, must use AND or OR",
          ),
        ],
        Language.SQL,
        "id, name, age, salary\n1, John, 30, 60000",
        "id, name, age, salary\n1, John, 30, 60000",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("OR Operator")
    .setHref("sql-or-operator")
    .setTags([])
    .setSynopsis("Match any condition")
    .setText("Use OR to filter rows that match at least one condition")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("Operators")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("SELECT * FROM orders", StateEnum.NORMAL),
          new CodeLine(
            "WHERE status = 'pending' AND status = 'processing'",
            StateEnum.ERROR,
            "Wrong: AND requires both conditions (impossible for one field)",
          ),
          new CodeLine(
            "WHERE status = 'pending' OR status = 'processing'",
            StateEnum.CORRECT,
            "Correct: OR matches any condition",
            10,
          ),
          new CodeLine(
            "WHERE status = 'pending' | status = 'processing'",
            StateEnum.WRONG,
            "SQL uses OR, not single pipe |",
          ),
          new CodeLine(
            "WHERE status || = 'pending' OR status = 'processing'",
            StateEnum.WRONG,
            "Invalid syntax, || is for string concatenation",
          ),
          new CodeLine(
            "WHERE status IN ('pending', 'processing')",
            StateEnum.WRONG,
            "Valid but not the OR syntax we're looking for",
          ),
        ],
        Language.SQL,
        "order_id, status\n1, pending\n2, processing",
        "order_id, status\n1, pending\n2, processing",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("NOT Operator")
    .setHref("sql-not-operator")
    .setTags([])
    .setSynopsis("Negate a condition")
    .setText("Use NOT to exclude rows that match a condition")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("Operators")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("SELECT * FROM products", StateEnum.NORMAL),
          new CodeLine(
            "WHERE NOT NOT category = 'electronics'",
            StateEnum.ERROR,
            "Double NOT is wrong - use single NOT or use !=",
          ),
          new CodeLine(
            "WHERE NOT category = 'electronics'",
            StateEnum.CORRECT,
            "Correct: NOT operator negates the condition",
            10,
          ),
          new CodeLine(
            "WHERE category != 'electronics'",
            StateEnum.WRONG,
            "!= works but NOT is more explicit",
          ),
          new CodeLine(
            "WHERE NOT (category = 'electronics')",
            StateEnum.WRONG,
            "Syntax is valid but less common",
          ),
          new CodeLine(
            "WHERE category <> 'electronics'",
            StateEnum.WRONG,
            "<> also works but NOT is clearer",
          ),
        ],
        Language.SQL,
        "product_id, name, category\n1, Chair, furniture",
        "product_id, name, category\n1, Chair, furniture",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("LIKE Pattern Matching")
    .setHref("sql-like")
    .setTags([])
    .setSynopsis("Search with pattern matching")
    .setText("Use LIKE to search for patterns in text")
    .setLevel(2)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("Patterns")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("SELECT * FROM users", StateEnum.NORMAL),
          new CodeLine(
            "WHERE name LIKE 'J%'",
            StateEnum.CORRECT,
            "Correct: LIKE with % wildcard matches names starting with J",
            10,
          ),
          new CodeLine(
            "WHERE name = 'J%'",
            StateEnum.WRONG,
            "= requires exact match, LIKE supports wildcards",
          ),
          new CodeLine(
            "WHERE name LIKE 'J_'",
            StateEnum.WRONG,
            "_ matches single character, % is for multiple",
          ),
          new CodeLine(
            "WHERE name MATCHES 'J%'",
            StateEnum.WRONG,
            "SQL uses LIKE not MATCHES",
          ),
        ],
        Language.SQL,
        "id, name\n1, John\n2, Jane",
        "id, name\n1, John\n2, Jane",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("IN Operator")
    .setHref("sql-in-operator")
    .setTags([])
    .setSynopsis("Match multiple values")
    .setText("Use IN to filter rows matching any value in a list")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("Operators")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("SELECT * FROM users", StateEnum.NORMAL),
          new CodeLine(
            "WHERE country IN ('USA', 'Canada', 'Mexico')",
            StateEnum.CORRECT,
            "Correct: IN matches any value in the list",
            10,
          ),
          new CodeLine(
            "WHERE country = ('USA', 'Canada', 'Mexico')",
            StateEnum.WRONG,
            "= doesn't work with multiple values, use IN",
          ),
          new CodeLine(
            "WHERE country IN 'USA', 'Canada', 'Mexico'",
            StateEnum.WRONG,
            "Need parentheses around the list",
          ),
          new CodeLine(
            "WHERE country BETWEEN 'USA' AND 'Mexico'",
            StateEnum.WRONG,
            "BETWEEN is for ranges, use IN for multiple specific values",
          ),
        ],
        Language.SQL,
        "id, name, country\n1, John, USA",
        "id, name, country\n1, John, USA",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("BETWEEN Operator")
    .setHref("sql-between")
    .setTags([])
    .setSynopsis("Filter within a range")
    .setText("Use BETWEEN to filter values within a range")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("Operators")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("SELECT * FROM products", StateEnum.NORMAL),
          new CodeLine(
            "WHERE price BETWEEN 50 AND 500",
            StateEnum.CORRECT,
            "Correct: BETWEEN filters inclusive range",
            10,
          ),
          new CodeLine(
            "WHERE price >= 50 AND price <= 500",
            StateEnum.WRONG,
            "Works but less concise than BETWEEN",
          ),
          new CodeLine(
            "WHERE price BETWEEN '50' AND '500'",
            StateEnum.WRONG,
            "Numbers shouldn't be in quotes",
          ),
          new CodeLine(
            "WHERE price BETWEEN 500 AND 50",
            StateEnum.WRONG,
            "Start value must be smaller than end value",
          ),
        ],
        Language.SQL,
        "product_id, name, price\n1, Laptop, 999",
        "product_id, name, price\n1, Laptop, 999",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("NULL Values")
    .setHref("sql-null")
    .setTags([])
    .setSynopsis("Handle missing data")
    .setText("Use IS NULL or IS NOT NULL to check for missing values")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("NULL")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine("SELECT * FROM users", StateEnum.NORMAL),
          new CodeLine(
            "WHERE phone_number IS NOT NULL",
            StateEnum.CORRECT,
            "Correct: IS NOT NULL checks for non-empty values",
            10,
          ),
          new CodeLine(
            "WHERE phone_number != NULL",
            StateEnum.WRONG,
            "Can't use != with NULL, must use IS NOT NULL",
          ),
          new CodeLine(
            "WHERE phone_number <> NULL",
            StateEnum.WRONG,
            "<> also doesn't work with NULL",
          ),
          new CodeLine(
            "WHERE phone_number IS NULL",
            StateEnum.WRONG,
            "IS NULL finds missing values, we need IS NOT NULL",
          ),
        ],
        Language.SQL,
        "id, name, phone_number\n1, John, 555-1234",
        "id, name, phone_number\n1, John, 555-1234",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("AVG Function")
    .setHref("sql-avg")
    .setTags([])
    .setSynopsis("Calculate average value")
    .setText("Use AVG() to find the average of numeric values")
    .setLevel(2)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("Aggregation")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "SELECT AVG(sallary) as average_salary",
            StateEnum.ERROR,
            "Typo: Should be 'salary' not 'sallary'",
          ),
          new CodeLine(
            "SELECT AVG(salary) as average_salary",
            StateEnum.CORRECT,
            "Correct: AVG() function with correct column name",
            10,
          ),
          new CodeLine(
            "SELECT AVERAGE(salary) as average_salary",
            StateEnum.WRONG,
            "SQL uses AVG, not AVERAGE",
          ),
          new CodeLine(
            "SELECT salary / COUNT(*) as average_salary",
            StateEnum.WRONG,
            "Manual calculation is complex, use AVG function",
          ),
          new CodeLine(
            "SELECT AVG * salary as average_salary",
            StateEnum.WRONG,
            "AVG is a function, must have parentheses with column",
          ),
          new CodeLine("FROM employees", StateEnum.NORMAL),
        ],
        Language.SQL,
        "average_salary\n55000",
        "average_salary\n55000",
      ),
    )
    .build(),

  new GameBuilder()
    .setTitle("MIN and MAX")
    .setHref("sql-min-max")
    .setTags([])
    .setSynopsis("Find minimum and maximum values")
    .setText("Use MIN() and MAX() to find smallest and largest values")
    .setLevel(1)
    .setLanguage(Language.SQL)
    .setMechanic(GameMechanic.CODE_EXECUTION)
    .setCategory("SQL Basics")
    .setSubcategory("Aggregation")
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "SELECT MIN(price), MAX(price)",
            StateEnum.ERROR,
            "Missing aliases - use 'as lowest' and 'as highest'",
          ),
          new CodeLine(
            "SELECT MIN(price) as lowest, MAX(price) as highest",
            StateEnum.CORRECT,
            "Correct: MIN() and MAX() with meaningful aliases",
            10,
          ),
          new CodeLine(
            "SELECT MINIMUM(price) as lowest, MAXIMUM(price) as highest",
            StateEnum.WRONG,
            "SQL uses MIN/MAX, not MINIMUM/MAXIMUM",
          ),
          new CodeLine(
            "SELECT MIN(price), MAX(price) as highest",
            StateEnum.WRONG,
            "Both functions should have aliases for clarity",
          ),
          new CodeLine(
            "SELECT price MIN as lowest, price MAX as highest",
            StateEnum.WRONG,
            "MIN and MAX are functions - use parentheses",
          ),
          new CodeLine("FROM products", StateEnum.NORMAL),
        ],
        Language.SQL,
        "lowest, highest\n10, 9999",
        "lowest, highest\n10, 9999",
      ),
    )
    .build(),
];
