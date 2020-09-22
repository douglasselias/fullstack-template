export function resolverArgs<Args, Return>(
  resolverFunction: ResolverFunction<Args, Return>
): ResolverArgs<Args> {
  return function (parent, args, context, info) {
    return resolverFunction({ parent, args, context, info })
  }
}

type ResolverArgs<Args> = (
  parent: unknown,
  args: Args,
  context: unknown,
  info: unknown
) => any

type ResolverFunction<Args, Return> = (params: {
  parent: unknown
  args: Args
  context: unknown
  info: unknown
}) => Return
