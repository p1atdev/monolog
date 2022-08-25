import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input, TextInput } from "@mantine/core"

const schema = z.object({
    email: z
        .string()
        .min(1, { message: "メールアドレスを入力してください" })
        .email({ message: "正しいメールアドレスを入力してください" }),
    // password: z
    //     .string()
    //     .min(1, { message: "パスワードを入力してください" })
    //     .regex(/^\w{8,}$/, { message: "パスワードは半角英数字8字以上にしてください" }),
    // passwordConfirm: z.string().min(1, { message: "確認用のパスワードを入力してください" }),
})
// .refine((data) => data.password === data.passwordConfirm, {
//     message: "パスワードが一致しません",
//     path: ["passwordConfirm"],
// })
// .transform((x) => {
//     return {
//         email: x.email,
//         password: x.password,
//     }
// })

const SignUpAuth = () => {
    const [loading, setLoading] = useState(false)
    const [mailSent, setMailSent] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    })

    const handleSignUp = async ({ email, password }: FieldValues) => {
        setLoading(true)
        setError(null)
        setMailSent(false)

        // const { error } = await supabase.auth.signInWithOtp({ email })
        // if (error) {
        //     setError(error.message)
        // } else {
        //     setMailSent(true)
        // }

        setLoading(false)
    }

    return (
        <div className="max-w-sm p-2">
            <p className="">Sign Up</p>
            <form
                onSubmit={handleSubmit(async (d) => {
                    await handleSignUp(d)
                })}
            >
                <div className="my-2">
                    <TextInput withAsterisk label="メールアドレス" type={"email"} {...register("email")} />
                    {errors.email?.message && <p>{String(errors.email?.message)}</p>}
                </div>
                {/* <div className="my-2">
                    <TextInput label="パスワード" type={"password"} {...register("password")} />
                    {errors.password?.message && <p>{String(errors.password?.message)}</p>}
                </div>
                <div className="my-2">
                    <TextInput label="パスワード(確認)" type={"password"} {...register("passwordConfirm")} />
                    {errors.passwordConfirm?.message && <p>{String(errors.passwordConfirm?.message)}</p>}
                </div> */}
                <Input type="submit" />
                {error && <p>{error}</p>}
                {loading && <p>Loading...</p>}
                {mailSent && <p>ログインURLを含むメールを送信しました。メールボックスを確認してください</p>}
            </form>
        </div>
    )
}

export default SignUpAuth
