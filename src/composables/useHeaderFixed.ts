export type Options = {
  fixedCheckPoint: number;
  checkPoint: number;
};

export default function useHeaderFixed(
  opts: Options = {
    fixedCheckPoint: 64,
    checkPoint: 120,
  },
  defaultFixed: boolean = true
): Ref<boolean> {
  const fixed = ref(defaultFixed);

  useListener("scroll", () => {
    const checkPoint: number = fixed ? opts.fixedCheckPoint : opts.checkPoint;
    fixed.value = window.scrollY >= checkPoint;
  });

  return fixed;
}
