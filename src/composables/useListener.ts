export default function useListener(name: string, callback: () => void) {
  onMounted(() => {
    window.addEventListener(name, callback, false);
  });

  onUnmounted(() => {
    window.removeEventListener(name, callback, false);
  });
}
