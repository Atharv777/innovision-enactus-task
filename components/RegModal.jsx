import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import Button from "./Button";
import { toast } from "react-toastify";

export function RegModal({ isExpanded, onClose }) {

    useEffect(() => {
        document.body.style.overflow = isExpanded ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isExpanded]);

    const submitForm = (e) => {
        e.preventDefault()


        const formData = new FormData(e.currentTarget);
        const formProps = Object.fromEntries(formData);

        console.log(formProps);

        toast.success('Form Submitted Successfully!', {
            position: "bottom-right",
            theme: "dark",
        });

        onClose()
    }

    return (
        <AnimatePresence>
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    transition={{ duration: 0.25 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-xl mx-4"
                    >
                        <form onSubmit={submitForm} className="w-full bg-black border border-white/20 rounded-xl">

                            <div className="p-6 flex flex-row items-start justify-between space-y-0 px-6 py-6">
                                <div className="flex flex-col gap-1">
                                    <div className="font-semibold tracking-tight text-xl">Register for events</div>
                                    <div className="text-muted-foreground text-sm">Select your events and secure a spot to make your first step.</div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 px-6">
                                <div className="flex flex-col gap-2">
                                    <label className="items-center text-sm font-medium select-none flex w-fit leading-snug gap-0.5" htmlFor="name">
                                        Name
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input name="name" type="text" placeholder="e.g. Atharv Varshney" required />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="items-center text-sm font-medium select-none flex w-fit leading-snug gap-0.5" htmlFor="email">
                                        Email
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input name="email" type="email" placeholder="e.g. atharv@email.com" required />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="items-center text-sm font-medium select-none flex w-fit leading-snug gap-0.5" htmlFor="rollno">
                                        NSUT Roll No.
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input name="rollno" type="text" placeholder="e.g. 2026UXX0000" required />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="items-center text-sm font-medium select-none flex w-fit leading-snug gap-0.5">
                                        Event Name
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input type="text" placeholder="e.g. Hack Vision" required />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="items-center text-sm font-medium select-none flex w-fit leading-snug gap-0.5" htmlFor="additionalInfo">
                                        Additional information
                                    </label>
                                    <Textarea name="additionalInfo" type="text" placeholder="Anything that you want us to know beforehand" />
                                </div>
                            </div>

                            <div className="p-6 pt-10">
                                <Button className="w-full hover:font-bold" type="submit">Register</Button>
                            </div>

                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
const Input = ({ type, ...props }) => {
    return (
        <input
            type={type}
            className="h-9 w-full min-w-0 rounded-md border border-input bg-input/30 px-3 py-1 text-base shadow-xs transition-all outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground md:text-sm focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/40"
            {...props}
        />
    )
}
const Textarea = ({ type, ...props }) => {
    return (
        <textarea
            type={type}
            rows={4}
            className="w-full min-w-0 rounded-md border border-input bg-input/30 px-3 py-1.5 text-base shadow-xs transition-all outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground md:text-sm focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/40"
            {...props}
        />
    )
}