class TimerStore {
    title: string | undefined
    timer: number = 0
    pauses: string[] = []

    getTitle() {
        return this.title
    }

    setTitle(title: string | undefined) {
        this.title = title
    }

    getTime() {
        return this.timer
    }

    setTime(time: number) {
        return this.timer = time
    }

    getPauses() {
        return this.pauses
    }

    setPauses(time: string) {
        return this.pauses.push(time)
    }
}

export default TimerStore