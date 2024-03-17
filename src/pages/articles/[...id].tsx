import BlurryBubbles from "@/components/home/BlurryBubbles";
import { Rubik, Syne } from "next/font/google";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const syne = Syne({ subsets: ["latin"], display: "swap", variable: "--font-syne" });
const rubik = Rubik({ subsets: ["latin"], display: "swap", variable: "--font-rubik" });

const ArticleList = [
    {
        id: "advanced-types-in-typescript",
        title: "Advanced Types in TypeScript",
        description:
            "Learn about advanced types in TypeScript such as conditional types, mapped types, intersection types, and union types.",
        sections: [
            {
                id: "conditional-types",
                title: "Conditional Types",
                description:
                    "Conditional types allow you to create types that depend on other types. They are defined using the extends keyword.",
                exampleExplanation: `In the above example, Check<T> checks if T extends string. If it does, it returns 'string', otherwise, it returns 'non-string'.`,
                code: `type Check<T> = T extends string ? 'string' : 'non-string';\n\ntype A = Check<string>;      // 'string'\ntype B = Check<number>;      // 'non-string'\ntype C = Check<boolean>;     // 'non-string'`,
            },
            {
                id: "mapped-types",
                title: "Mapped Types",
                description:
                    "Mapped types allow you to create new types based on existing types by applying a transformation to each property in the original type.",
                exampleExplanation: `In this example, ReadonlyOptions creates a new type where all properties are marked as readonly.`,
                code: `type Options = {\n\twidth: number;\n\theight: number;\n\tcolor: string;\n};\n\ntype ReadonlyOptions = {\n\treadonly [P in keyof Options]: Options[P];\n};\n\nconst options: ReadonlyOptions = {\n\twidth: 100,\n\theight: 200,\n\tcolor: 'blue'\n};\n\n// options.width = 150;   //Error: Cannot assign to 'width' because it is a read-only property.`,
            },
            {
                id: "intersection-types",
                title: "Intersection Types",
                description:
                    "Intersection types allow you to combine multiple types into one. The resulting type will have all the properties of the constituent types.",
                exampleExplanation: `In this example, C is an intersection type of A and B, so objects of type C must have all properties from A and B.`,
                code: `interface A {\n\tname: string;\n\tage: number;\n}\n\ninterface B {\n\taddress: string;\n\tage: number;\n}\n\ntype C = A & B;\n\nconst obj: C = {\n\tname: 'John',\n\tage: 30,\n\taddress: '123 Main St'\n};`,
            },
            {
                id: "union-types",
                title: "Union Types",
                description: "Union types allow a value to be of more than one type.",
                exampleExplanation: `In this example, Status is a union type that can only be either 'success' or 'error'. The process function takes a Status parameter and returns a string based on the status.`,
                code: `type Status = 'success' | 'error';\n\nfunction process(status: Status): string {\n\tif (status === 'success') {\n\t\treturn 'Operation successful';\n\t} else {\n\t\treturn 'Operation failed';\n\t}\n}\n\nconsole.log(process('success'));   // Output:`,
            },
        ],
    },

    {
        id: "generics-in-typescript",
        title: "Generics in TypeScript",
        description:
            "Learn about generics in TypeScript and how they can be used to create reusable and flexible components.",
        sections: [
            {
                id: "what-are-generics",
                title: "What are Generics?",
                description:
                    "Generics allow you to create reusable components that can work with a variety of data types. They are similar to function arguments, but for types.",
                exampleExplanation: `In this example, we define a generic function that takes a type parameter T and returns an array of that type.`,
                code: `function identity<T>(arg: T): T {\n\treturn arg;\n}\n\nlet output = identity<string>('hello');   // output: string\nlet output2 = identity<number>(5);        // output: number`,
            },
            {
                id: "generic-constraints",
                title: "Generic Constraints",
                description:
                    "Generic constraints allow you to limit the types that can be used with a generic component. You can use the extends keyword to specify a base type.",
                exampleExplanation: `In this example, we define a generic function that takes a type parameter T that extends the interface Lengthwise.`,
                code: `interface Lengthwise {\n\tlength: number;\n}\n\nfunction loggingIdentity<T extends Lengthwise>(arg: T): T {\n\tconsole.log(arg.length);\n\treturn arg;\n}\n\nlet output = loggingIdentity({ length: 10, value: 3 });   // output: { length: 10, value: 3 }`,
            },
            {
                id: "generic-factory",
                title: "Generic Factory",
                description:
                    "Generic factories allow you to create new instances of a class or object based on a generic type parameter.",
                exampleExplanation: `In this example, we define a generic factory function that takes a type parameter T and returns a new instance of that type.`,
                code: `function create<T>(c: { new (): T }): T {\n\treturn new c();\n}\n\nclass Dog {\n\twoof() {\n\t\tconsole.log('Woof!');\n\t}\n}\n\nlet dog = create(Dog);\ndog.woof();   // output: Woof!`,
            },
            {
                id: "generic-functions",
                title: "Generic Functions",
                description:
                    "Generic functions allow you to create functions that can work with any type. In example below, we swap two variables.",
                exampleExplanation: `In this example, the swap function uses a type parameter T to specify the type of the variables a and b. This allows the function to work with any type of data.`,
                code: `function swap<T>(a: T, b: T): T[] {\n\tlet temp: T = a;\n\ta = b;\n\tb = temp;\n\treturn [a, b];\n}\n\nlet x: number = 10;\nlet y: number = 20;\n\n[x, y] = swap(x, y);\nconsole.log(x, y);  // Output: 20 10`,
            },
            {
                id: "generic-classes",
                title: "Generic Classes",
                description:
                    "Generic classes allow you to create classes that can work with any data type. Here's an example of a generic Pair class that holds a pair of values:",
                exampleExplanation: `In this example, the Pair class is defined with two type parameters T and U, which represent the types of the first and second values, respectively. You can create instances of the Pair class with different types for the first and second values.`,
                code: `class Pair<T, U> {\n\tconstructor(public first: T, public second: U) {}\n}\n\nlet pair1 = new Pair<number, string>(1, 'one');\nconsole.log(pair1.first, pair1.second);  // Output: 1 one\n\nlet pair2 = new Pair<string, boolean>('true', true);\nconsole.log(pair2.first, pair2.second);  // Output: true true`,
            },
            {
                id: "generic-interfaces",
                title: "Generic Interfaces",
                description:
                    "Generic interfaces allow you to define interfaces with type parameters. Here's an example of a generic interface representing a stack data structure:",
                exampleExplanation: `In this example, the Stack interface is defined with a type parameter T, representing the type of items in the stack. The NumberStack class implements the Stack interface with number as the type parameter.`,
                code: `interface Stack<T> {\n\tpush(item: T): void;\n\tpop(): T;\n}\n\nclass NumberStack implements Stack<number> {\n\titems: number[] = [];\n\tpush(item: number): void {\n\t\tthis.items.push(item);\n\t}\n\tpop(): number {\n\t\treturn this.items.pop();\n\t}\n}\n\nlet stack = new NumberStack();\nstack.push(1);\nstack.push(2);\nconsole.log(stack.pop());  // Output: 2`,
            },
        ],
    },
];
function Articles() {
    const router = useRouter();
    const { id } = router.query;

    const fullWidth = {
        width: "100%",
    };

    return (
        <div
            className={`flex min-h-screen bg-primary w-screen overflow-x-hidden flex-col items-center justify-start relative py-12 ${syne.variable} ${rubik.variable}`}
        >
            <BlurryBubbles count={2} />

            {ArticleList.map((article, index) => {
                if (article.id.toString() === id?.toString()) {
                    return (
                        <Fragment key={index}>
                            <div className="text-white text-center text-2xl sm:text-[32px] font-bold font-rubik mx-auto md:mx-0 tracking-wide px-4">
                                {article.title}
                            </div>
                            <div id={article.id} className="flex flex-col w-full p-5 max-w-screen-xl">
                                <div className="flex flex-col w-full">
                                    {article.sections.map((section) => {
                                        return (
                                            <div key={section.id} className="flex flex-col w-full mt-14">
                                                <p className="text-left font-light text-white/75">
                                                    <span className="mr-1 font-semibold text-xl font-syne">
                                                        - <span className="underline">{section.title}</span> :
                                                    </span>{" "}
                                                    <br />
                                                    <br />
                                                    {section.description}
                                                </p>

                                                <div className="flex w-full mt-5">
                                                    <CodeBlock
                                                        customStyle={fullWidth}
                                                        language="typescript"
                                                        text={section.code}
                                                        theme={dracula}
                                                    />
                                                </div>

                                                <p className="text-left font-light text-white/75 mt-3">
                                                    {section.exampleExplanation}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Fragment>
                    );
                }
            })}
        </div>
    );
}

export default Articles;
